'use client'

import { useSession } from 'next-auth/react'

export default function profile() {
  const session = useSession()

  if (session.data?.user) {
    return <div>From Client: {JSON.stringify(session.data.user)}</div>
  }

  return <div>From Client: Signed Out</div>
}
