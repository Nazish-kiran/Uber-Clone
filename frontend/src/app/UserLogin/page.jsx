import React from 'react'

const page = () => {
  return (
    <>
    <div className='p-7'>
    <form action=""></form>
    <h3 className='text-xl mb-2'>What's your email</h3>
    <input type="email" name="" id="" className='px-2 py-2  rounded' required placeholder='email@example.com'/>
    <h3>Enter Password</h3>
    <input type="password" name="" id="" required placeholder='password'/>
    <button>Login</button>
    </div>
    </>
  )
}

export default page