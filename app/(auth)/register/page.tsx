'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signup } from '../actions'
import { useActionState } from 'react'
import { Loader2 } from 'lucide-react'

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(signup, null)

  return (
    <div className="grid gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Starte die Transformation</h1>
        <p className="text-balance text-muted-foreground">
          Erstelle deinen Account und beginne sofort.
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
          <Label htmlFor="password">Passwort</Label>
          <Input id="password" name="password" type="password" required disabled={isPending} />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
           {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Account erstellen"}
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Bereits dabei?{" "}
        <Link href="/auth/login" className="underline hover:text-primary">
          Login
        </Link>
      </div>
    </div>
  )
}
