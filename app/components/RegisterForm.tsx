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
    dates:string[],
    lang:string,
}



const RegisterForm = ({type,activityName,dates,lang}:RegisterFormPropsType) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [selectedDate,setSelectedDate] = useState("")
    const [agreeTerms,setAgreeTerms] = useState(false)
    const handleCheckAgreeTerms = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setAgreeTerms(event.target.checked)
    }
    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!name){
            toast.error(`${lang==="hu"?"kérlek írd meg a neved":lang==="en"?"please write your name":"请填写您的名字"}`)
            return
        }
        if(!email){
            toast.error(`${lang==="hu"?"kérlek írd meg a email":lang==="en"?"please write your email":"请填写您的邮箱"}`)
            return
        }
        if(type==="course" && !selectedDate){
            toast.error(`${lang==="hu"?"kérem válasszon kezdési dátumot":lang==="en"?"please pick a start date":"请选择一个开课日期"}`)
            return
        }
        if(!agreeTerms){
            toast.error(`${lang==="hu"?"kérjük, fogadja el a feltételeket":lang==="en"?"please agree with the terms":"请勾选同意条款"}`)
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
            toast.success(`${lang==="hu"?"Sikeres beküldés":lang==="en"?"Submit successfully":"提交成功！"}`)
        }catch(error){
            toast.error("something went wrong!")
        }
    }
  return (
    <div className='w-full md:w-[80%] text-xl self-center'>
        <Toaster />
        <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <div className='flex items-center gap-5'>
                <label htmlFor="email" className='w-[100px]'>{lang==="hu"?"Címe":lang==="en"?"Course Name":"课程名称"}:</label>
                <input type="email" id='email' className='border border-1 border-ternary-color flex-1 p-2' value={activityName} disabled />
            </div>
            {
                type === "course" && (
                    <div className='flex items-center gap-5'>
                        <label htmlFor="date" className='w-[100px]'>{lang==="hu"?"dátuma":lang==="en"?"Date":"课程日期"}:</label>
                        <select className='border border-ternary-color p-2'  onChange={(e)=>setSelectedDate(e.target.value)}>
                            <option value="">{lang==="hu"?"A tanfolyam kezdési dátuma":lang==="en"?"Please choose a date":"请选择一个日期"}</option>
                            {
                                dates.map((date,index)=>(
                                    <option key={index} value={date}>{date}</option>
                                ))
                            }
                        </select>
                    </div>
                )
            }
            
            <div className='flex items-center gap-5'>
                <label htmlFor="email" className='w-[100px]'>Email:</label>
                <input type="email" id='email' className='border border-1 border-ternary-color flex-1 p-2' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='name' className='w-[100px]'>{lang==="hu"?"Név":lang==="en"?"Your Name":"您的名字"}:</label>
                <input type='text' id='name'  className='border border-1 border-ternary-color flex-1 p-2' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex items-center gap-5'>
                <label htmlFor='message' id='message' className='w-[100px]'>{lang==="hu"?"Üzenet":lang==="en"?"Message":"您的留言"}:</label>
                <textarea className='border border-1 border-black flex-1 p-2' rows={5} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <div className='flex items-center gap-5'>
                <div className='w-[100px]'>
                </div>
                <div className='flex gap-2 text-sm'>
                    <input type='checkbox' checked={agreeTerms} className='border-ternary-color' onChange={handleCheckAgreeTerms} />
                    <p>{lang==="hu"?"ezekkel egyetértek":lang==="en"?"I agree with these":"我同意"}</p><Link className='text-dark-blue underline' href={`/articles/terms?lang=${lang}`} target='_blank'>{lang==="hu"?" feltételeket":lang==="en"?" these conditions":"这些条款"}</Link>
                </div>
                
            </div>
            <div className='self-center'>
                <button className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color'>{lang==="hu"?" Beküldés":lang==="en"?"submit":"提交"}</button>
            </div>
            
        </form>
    </div>
  )
}

export default RegisterForm