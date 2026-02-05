"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Using existing UI
import { UserPlus, ShoppingBag, Store, Loader2, Link as LinkIcon } from "lucide-react";

// Types for our demo state
interface ConnectedAccount {
  id: string;
  email: string;
  name: string;
  ready: boolean;
}

interface Product {
  id: string; // This is actually the product ID, but we usually need the Price ID for checkout
  name: string;
  price: number;
  default_price: string; // Price ID
}

interface AccountStatus {
  readyToReceivePayments: boolean;
  onboardingComplete?: boolean;
  details?: Record<string, unknown>;
}

export default function ConnectDemoPage() {
  // State
  const [partnerName, setPartnerName] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [currentAccount, setCurrentAccount] = useState<ConnectedAccount | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<AccountStatus | null>(null);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("100"); // in EUR
  const [products, setProducts] = useState<Product[]>([]);

  // 1. Create Account
  const createAccount = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/connect/accounts", {
        method: "POST",
        body: JSON.stringify({ name: partnerName, email: partnerEmail }),
      });
      const data = await res.json();
      if (data.accountId) {
        const newAccount = { id: data.accountId, name: partnerName, email: partnerEmail, ready: false };
        setCurrentAccount(newAccount);
        // Persist for demo purposes (usually DB)
        localStorage.setItem("demo_connect_account", JSON.stringify(newAccount));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // 2. Onboard
  const startOnboarding = async () => {
    if (!currentAccount) return;
    setLoading(true);
    try {
      const res = await fetch("/api/connect/onboard", {
        method: "POST",
        body: JSON.stringify({ accountId: currentAccount.id }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // 3. Check Status
  const checkStatus = async () => {
    if (!currentAccount) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/connect/status?accountId=${currentAccount.id}`);
      const data = await res.json();
      setStatus(data);
      if (data.readyToReceivePayments) {
        setCurrentAccount((prev) => prev ? { ...prev, ready: true } : null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // 4. Create Product
  const createProduct = async () => {
    if (!currentAccount) return;
    setLoading(true);
    try {
      const res = await fetch("/api/connect/products", {
        method: "POST",
        body: JSON.stringify({
          name: productName,
          description: "Demo Product from Partner",
          priceInCents: parseFloat(productPrice) * 100,
          connectedAccountId: currentAccount.id,
        }),
      });
      const data = await res.json();
      if (data.product) {
        setProducts([...products, {
          id: data.product.id,
          name: data.product.name,
          price: parseFloat(productPrice),
          default_price: data.product.default_price,
        }]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // 5. Buy Product
  const buyProduct = async (priceId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/connect/checkout", {
        method: "POST",
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Load from local storage for demo continuity
  useEffect(() => {
    const stored = localStorage.getItem("demo_connect_account");
    if (stored) setCurrentAccount(JSON.parse(stored));
    
    // Check for success param from redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('accountId')) {
       // Returning from onboarding
       const storedAcc = localStorage.getItem("demo_connect_account");
       if (storedAcc) {
         const acc = JSON.parse(storedAcc);
         // Auto check status
         fetch(`/api/connect/status?accountId=${acc.id}`)
           .then(res => res.json())
           .then(data => setStatus(data));
       }
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-black uppercase text-white tracking-tighter">
            <span className="text-yellow-500">Lion</span> Connect
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto">
            A sample integration of Stripe Connect V2. Create a partner account, list products, and simulate a marketplace transaction.
          </p>
        </div>

        {/* 1. Partner Onboarding Section */}
        <section className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-8">
           <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
              <UserPlus className="text-yellow-500 w-8 h-8" />
              <h2 className="text-2xl font-bold uppercase">1. Partner Onboarding</h2>
           </div>

           {!currentAccount ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-zinc-400">Partner Name</label>
                  <input 
                    type="text" 
                    value={partnerName}
                    onChange={e => setPartnerName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-yellow-500 outline-none"
                    placeholder="e.g. Iron Gym Berlin"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-zinc-400">Partner Email</label>
                  <input 
                    type="email" 
                    value={partnerEmail}
                    onChange={e => setPartnerEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-yellow-500 outline-none"
                    placeholder="partner@example.com"
                  />
                </div>
                <Button 
                   onClick={createAccount} disabled={loading || !partnerName || !partnerEmail}
                   className="md:col-span-2 bg-white text-black hover:bg-yellow-500 font-bold h-12"
                >
                   {loading ? <Loader2 className="animate-spin" /> : "Create Connect Account (V2)"}
                </Button>
             </div>
           ) : (
             <div className="space-y-6">
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                   <div>
                     <p className="text-sm text-zinc-500">Connected Account ID</p>
                     <p className="font-mono text-yellow-500 text-lg">{currentAccount.id}</p>
                   </div>
                   <div className="text-right">
                     <p className="text-sm text-zinc-500">Status</p>
                     <p className={`font-bold ${status?.readyToReceivePayments ? 'text-green-500' : 'text-orange-500'}`}>
                        {status?.readyToReceivePayments ? 'Active' : 'Unverified'}
                     </p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <Button onClick={startOnboarding} className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 flex-1">
                      {status?.readyToReceivePayments ? "Update Settings" : "Onboard to Collect Payments"} <LinkIcon className="ml-2 w-4 h-4" />
                   </Button>
                   
                   <Button onClick={checkStatus} variant="outline" className="h-12 border-zinc-700 text-zinc-300">
                      Refresh Status
                   </Button>
                </div>

                {status && (
                  <div className="p-4 bg-zinc-950/50 rounded-lg text-sm text-zinc-400 font-mono">
                    <pre>{JSON.stringify(status, null, 2)}</pre>
                  </div>
                )}
             </div>
           )}
        </section>

        {/* 2. Product Creation (Only if Account Exists) */}
        {currentAccount && (
        <section className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-8 opacity-100 transition-opacity">
           <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
              <ShoppingBag className="text-teal-500 w-8 h-8" />
              <h2 className="text-2xl font-bold uppercase">2. Create Listing</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                 <label className="text-sm font-bold text-zinc-400">Item Name</label>
                 <input 
                    type="text" 
                    value={productName} 
                    onChange={e => setProductName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 outline-none focus:border-teal-500"
                    placeholder="e.g. 1h Coaching"
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-zinc-400">Price (EUR)</label>
                 <input 
                    type="number" 
                    value={productPrice} 
                    onChange={e => setProductPrice(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 outline-none focus:border-teal-500"
                    placeholder="100"
                 />
              </div>
              <div className="flex items-end">
                 <Button onClick={createProduct} disabled={loading} className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold h-11">
                    List Item
                 </Button>
              </div>
           </div>
        </section>
        )}

        {/* 3. Marketplace Storefront */}
        <section className="p-8 rounded-3xl bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 space-y-8">
           <div className="flex items-center gap-4 border-b border-zinc-700 pb-6">
              <Store className="text-purple-500 w-8 h-8" />
              <h2 className="text-2xl font-bold uppercase">3. Live Storefront</h2>
           </div>

           {products.length === 0 ? (
             <div className="text-center py-12 text-zinc-500 italic">
                No products listed yet. Create a listing above!
             </div>
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <div key={product.id} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between hover:border-purple-500 transition-colors group">
                     <div>
                        <div className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-2">Partner Listing</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{product.name}</h3>
                        <p className="text-2xl font-black text-white">€{product.price}</p>
                     </div>
                     <Button 
                       onClick={() => buyProduct(product.default_price)} 
                       className="w-full mt-6 bg-purple-600 hover:bg-purple-500 text-white font-bold"
                     >
                       Buy Now
                     </Button>
                  </div>
                ))}
            </div>
           )}
        </section>
      </div>
    </div>
  );
}
