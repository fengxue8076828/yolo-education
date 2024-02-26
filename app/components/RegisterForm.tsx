"use client"
import React,{useState} from 'react'
import Button from './Button'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

export interface RegisterFormPropsType {
    selectedDate?:string,
    type:string,
    activityName:string,
}



const RegisterForm = ({selectedDate,type,activityName}:RegisterFormPropsType) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [agreeTerms,setAgreeTerms] = useState(false)
    const handleCheckAgreeTerms = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setAgreeTerms(event.target.checked)
    }
    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!name){
            toast.error("please write your name")
            return
        }
        if(!email){
            toast.error("please write your email")
            return
        }
        if(type==="course" && !selectedDate){
            toast.error("please pick a start date")
            return
        }
        if(!agreeTerms){
            toast.error("please agree with the terms")
            return
        }
        try{
            const res = await fetch("/api/register",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    message,
                    type,
                    activityName,
                    startDate:selectedDate
                })
            })
            if(res.status === 500){
                throw new Error("something went wrong")
            }
            toast.success("Submit successfully")
        }catch(error){
            toast.error("something went wrong!")
        }
    }
  return (
    <div className='w-full md:w-[80%] text-xl self-center'>
        <Toaster />
        <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div className='flex items-center gap-5'>
                <label htmlFor="email" className='w-[100px]'>címe:</label>
                <input type="email" id='email' className='border border-1 border-ternary-color flex-1 p-1' value={activityName} disabled />
            </div>
            {
                type === "course" && (
                    <div className='flex items-center gap-5'>
                        <label htmlFor="email" className='w-[100px]'>dátuma:</label>
                        <input type="email" id='email' className='border border-1 border-ternary-color flex-1 p-1' value={selectedDate} disabled />
                    </div>
                )
            }
            
            <div className='flex items-center gap-5'>
                <label htmlFor="email" className='w-[100px]'>Email:</label>
                <input type="email" id='email' className='border border-1 border-ternary-color flex-1 p-1' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='name' className='w-[100px]'>Név:</label>
                <input type='text' id='name'  className='border border-1 border-ternary-color flex-1 p-1' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='message' id='message' className='w-[100px]'>Üzenet:</label>
                <textarea className='border border-1 border-ternary-color flex-1 p-1' rows={5} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <div className='flex items-center gap-5'>
                <div className='w-[100px]'>
                </div>
                <div className='flex gap-2 text-sm'>
                    <input type='checkbox' checked={agreeTerms} onChange={handleCheckAgreeTerms} />
                    <p>ezekkel egyetértek</p><Link className='text-dark-blue underline' href="/articles/exermpt">feltételeket</Link>
                </div>
                
            </div>
            <div className='self-center'>
                <button className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color'>Beküldés</button>
            </div>
            
        </form>
    </div>
  )
}

export default RegisterForm