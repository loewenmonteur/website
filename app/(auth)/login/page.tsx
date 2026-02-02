'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { login } from '../actions'
import { useActionState } from 'react'
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null)

  return (
    <div className="grid gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Willkommen zurück</h1>
        <p className="text-balance text-muted-foreground">
          Logge dich ein, um dein Training fortzusetzen.
        </p>
      </div>
      <form action={formAction} className="grid gap-4">
        {state?.error && (
          <div className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">
            {state.error}
          </div>
        )}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="deine@email.com" required disabled={isPending} />
        </div>
        <div className="grid gap-2">
           <div className="flex items-center">
            <Label htmlFor="password">Passwort</Label>
            <Link href="#" className="ml-auto inline-block text-sm underline opacity-50 hover:opacity-100">
              Vergessen?
            </Link>
          </div>
          <Input id="password" name="password" type="password" required disabled={isPending} />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Login"}
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Noch kein Account?{" "}
        <Link href="/auth/register" className="underline hover:text-primary">
          Transformation starten
        </Link>
      </div>
    </div>
  )
}
