'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen w-full bg-background/80">
        <Sidebar />
        <div className="flex-1">
          <ChatArea />
        </div>
      </div>
    </Suspense>
  )
}
