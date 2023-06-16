import Link from 'next/link'
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex w-full flex-col space-y-3'>

      <h1 className='font-bold text-2xl'>Welcome to the Login Auth.</h1>
      <span className='text-lg'>
        To test this <Link className='font-bold text-xl text-blue-700 hover:text-blue-500 hover:underline' href={'/log-in'}>Go to Log In page</Link> and try sending in some values. Null values will return an error and focus the valid input. Invalid emails will also show an error and focus the input. 
      
      </span>
      </div>
      
    </main>
  )
}
