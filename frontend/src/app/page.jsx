import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <>
<div className='h-screen bg-cover bg-center w-full pt-8  flex justify-between flex-col' style={{ backgroundImage: "url('/images/tom-barrett-m8H0Ppm2IVk-unsplash.jpg')" }}>
   <Image src="/images/logo.png" alt="Logo" className='w-16 ml-8' width={14} height={80} />
<div className='bg-white pb-7 px-4'>
    <h2 className='text-[30px] font-semibold '>Get Started with Uber</h2>
    <Link href="/UserLogin">
  <button className='w-full bg-black text-white py-3 rounded mt-5'>Continue</button>
    </Link>
</div>
    </div>
    </>
  )
}

export default page