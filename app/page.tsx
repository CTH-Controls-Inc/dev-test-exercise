import Image from 'next/image'
import Login from './components/login/login'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="z-10 w-full text-sm">
        <Login></Login>
      </div>
    </main>
  )
}
