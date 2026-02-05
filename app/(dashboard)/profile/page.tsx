import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { User, Shield, CreditCard, LogOut, Award } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // In a real app, we would fetch the profile from public.profiles here.
  // Using mock data for now as per schema prepared.
  const profile = {
    status: 'Welpling',
    current_phase: 'Fundament',
    streak_count: 12,
    start_date: '2026-01-20'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Profil</h1>
        <p className="text-zinc-500">Verwalte dein System & deine Identität.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Identity Card */}
        <Card className="md:col-span-2 bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center border-2 border-yellow-500/20">
                <User className="w-10 h-10 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{user.email?.split('@')[0]}</h2>
                <p className="text-zinc-500 font-mono text-sm">{user.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">Rank: {profile.status}</span>
                  <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{profile.current_phase}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                <p className="text-xs text-zinc-500 uppercase font-mono mb-1">Dabei seit</p>
                <p className="text-white font-bold">{new Date(profile.start_date).toLocaleDateString('de-DE')}</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                <p className="text-xs text-zinc-500 uppercase font-mono mb-1">Streak</p>
                <p className="text-yellow-500 font-bold">{profile.streak_count} Tage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <div className="space-y-4">
          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <Shield className="w-5 h-5 text-zinc-400" />
              <div>
                <p className="text-sm font-bold text-white">Sicherheit</p>
                <p className="text-xs text-zinc-500">Passwort & Auth</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <CreditCard className="w-5 h-5 text-zinc-400" />
              <div>
                <p className="text-sm font-bold text-white">Mitgliedschaft</p>
                <p className="text-xs text-zinc-500">Abo verwalten</p>
              </div>
            </CardContent>
          </Card>

          <form action="/auth/signout" method="post">
            <button className="w-full p-4 rounded-xl border border-red-900/20 bg-red-950/5 text-red-500 text-sm font-bold flex items-center gap-4 hover:bg-red-950/10 transition-colors">
              <LogOut className="w-5 h-5" />
              Abmelden
            </button>
          </form>
        </div>
      </div>

      {/* Progress / History (Static Placeholder) */}
      <Card className="bg-zinc-900/50 border-zinc-800">
         <CardHeader>
           <CardTitle className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2">
             <Award className="w-5 h-5 text-yellow-500" />
             Errungenschaften
           </CardTitle>
         </CardHeader>
         <CardContent className="p-8 border-t border-zinc-800/50">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[140px] aspect-square rounded-full border-4 border-dashed border-zinc-800 flex items-center justify-center opacity-20 grayscale">
                  <Award className="w-12 h-12 text-zinc-500" />
                </div>
              ))}
              <div className="min-w-[140px] text-center flex flex-col items-center justify-center border-t border-zinc-800 pt-8 opacity-40">
                <p className="text-[10px] uppercase font-mono text-zinc-500">Wird geladen...</p>
              </div>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
