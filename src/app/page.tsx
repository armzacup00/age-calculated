"use client"

import Birthdate from "@/components/input/Birthdate";

export default function Home() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <main className="flex justify-center justify-items-center align-middle h-screen items-center bg-Off_white" >
      <Birthdate/>
    </main>
  )
}
