import { NextRequest,NextResponse } from "next/server";
import { RegistrationType } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const POST = async(req:NextRequest) => {
    try{
        const {name,email,message,type,activityName,startDate} = await req.json()
        const registration:RegistrationType = {
            _type:"registration",
            name,
            email,
            message,
            type,
            activityName,
            startDate
        }
        const result = client.create(registration)
        console.log("************",result)
        return NextResponse.json({message:"Registered Successfully"},{status:200})
    }catch(error){
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}