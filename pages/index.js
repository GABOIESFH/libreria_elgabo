import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'



export default function Home() {
  //logica en JS

  const name= "Gabo"
  return (
    //html
    <main className='h-screen w-screen bg-black'>
      <h1 className='text-4xl text-center text-white'>Hola {name} </h1>
     <Link href="/demo" className='text text-4xl text-center text-white'>Demo
     </Link>
    </main>
  )
}
