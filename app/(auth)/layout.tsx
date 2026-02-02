export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Visual Side */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-zinc-900 border-r border-zinc-800 p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3f3f46_0%,_#18181b_100%)] opacity-20" />
        <div className="relative z-10 text-center space-y-6">
           <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
             Löwentrafo
           </h2>
           <blockquote className="text-zinc-400 text-lg max-w-md italic">
             "Disziplin ist die Brücke zwischen<br/>Zielen und Erreichung."
           </blockquote>
        </div>
      </div>
      
      {/* Form Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-10 bg-background text-foreground">
        <div className="w-full max-w-sm space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
