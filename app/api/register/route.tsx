import { NextRequest,NextResponse } from "next/server";
import { RegistrationType } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import nodemailer from 'nodemailer';

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
        const result = await client.create(registration)

        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.eu', // Zoho's SMTP server
            port: 465, // SSL port for secure email sending
            secure: true, // true for 465, false for other ports
            auth: {
              user: process.env.NEXT_PUBLIC_ZOHO_USER, // your Zoho email address from environment variables
              pass: process.env.NEXT_PUBLIC_ZOHO_PASSWORD, // your Zoho email password from environment variables
            },
          });

          await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_ZOHO_USER, // sender address (your Zoho email)
            to: "info@yolo-education.com", // list of receivers
            subject: `A new ${registration.activityName} registration from ${registration.name}`, // subject line
            text: `User ${registration.name} with email ${registration.email} has registered ${registration.activityName} from ${registration.type},\n start time:${registration.startDate} \n message:${registration.message}`, // plain text body
          });

          await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_ZOHO_USER, // sender address (your Zoho email)
            to: registration.email, // list of receivers
            subject: `Thank you for register YOLO Education!`, // subject line
            text: `Dear ${registration.name}, \nYou registered ${registration.activityName} from ${registration.type},\n start time:${registration.startDate} \n Our teacher will contact soon.\n\n Best Regards,\nYOLO Education`, // plain text body
          });

        return NextResponse.json({message:"Registered Successfully"},{status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}