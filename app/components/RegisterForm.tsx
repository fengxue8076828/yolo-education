import React from 'react'
import Button from './Button'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <div className='w-full md:w-[80%] text-xl self-center'>
        <form action="" className='flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
                <label htmlFor="email" className='w-[100px]'>Email:</label>
                <input type="email" id='email' className='border border-1 border-ternary-color flex-1 p-1' />
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='name' className='w-[100px]'>Name:</label>
                <input type='text' id='name'  className='border border-1 border-ternary-color flex-1 p-1'/>
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='message' id='message' className='w-[100px]'>Message:</label>
                <textarea className='border border-1 border-ternary-color flex-1 p-1' rows={5}></textarea>
            </div>
            <div className='flex items-center gap-5'>
                <div className='w-[100px]'>
                </div>
                <div className='flex gap-2 text-sm'>
                    <input type='checkbox' />
                    <p>I agree with these</p><Link className='text-dark-blue underline' href="/articles/exermpt">terms</Link>
                </div>
                
            </div>
            <div className='self-center'>
                <Button text='Submit' clickHandler={()=>{}} />
            </div>
            
        </form>
    </div>
  )
}

export default RegisterForm