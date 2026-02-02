import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Dumbbell, 
  Utensils, 
  ListTodo, 
  GraduationCap, 
  LayoutDashboard,
  LogOut,
  Settings
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const navItems = [
    { name: "Cockpit", icon: LayoutDashboard, href: "/dashboard" },
    { name: "TRAIN", icon: Dumbbell, href: "/train" },
    { name: "EAT", icon: Utensils, href: "/eat" },
    { name: "MOVE", icon: ListTodo, href: "/move" },
    { name: "LEAD", icon: GraduationCap, href: "/lead" },
    { name: "PROVE", icon: Trophy, href: "/prove" },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500 selection:text-black">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-zinc-900/50 bg-zinc-950 fixed h-full z-50">
        <div className="h-16 flex items-center px-6 border-b border-zinc-900/50">
          <Link href="/dashboard" className="font-black text-xl tracking-tighter uppercase text-white hover:text-yellow-500 transition-colors">
            Löwen<span className="text-yellow-500">trafo</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-yellow-500 hover:bg-zinc-900/50 transition-all group"
            >
              <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500 transition-colors" />
              <span className="tracking-wide uppercase">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-900/50 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900" asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Einstellungen
            </Link>
          </Button>
          <form action="/auth/signout" method="post">
             <button className="flex w-full items-center px-4 py-2 text-sm font-medium text-zinc-500 hover:text-red-400 transition-colors rounded-lg hover:bg-red-950/10">
                <LogOut className="mr-2 h-4 w-4" />
                Abmelden
             </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto p-4 md:p-8 md:pt-12">
           {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-900 z-50 flex items-center justify-around px-2">
        {navItems.slice(0, 5).map((item) => ( // Show first 5 items on mobile for space
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center p-2 text-zinc-500 hover:text-yellow-500 transition-colors"
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
          </Link>
        ))}
        {/* PROVE is accessible via Dashboard or a 'More' menu if needed, sticking to 5 icons is safer for mobile */}
      </nav>
    </div>
  );
}
