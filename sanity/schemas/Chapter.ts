import { PortableText } from "@portabletext/react";
import { Rule } from "@sanity/types";

export const Chapter = {
    name:"chapter",
    title:"Fejezet",
    type:"document",
    fields:[
        {
            name:"sequence",
            title:"Sorrend",
            type:"number",
            validation:(Rule:Rule) => Rule.min(0),
            initialValue:0
        },
        {
            name:"name",
            title:"Név",
            type:"string"
        },
        {
            name:"content",
            title:"Tartalom",
            type:"array",
            of:[{type:"block"}]
        },
        {
            name:"course",
            title:"Tanfolyam",
            type:"reference",
            to:[{type:"course"}]
        }
    ],
    preview:{
        select:{
            title:"name",
            courseName:"course.name",
        },
        prepare(selection:{title:string,courseName:string}){
            const {title,courseName} = selection
            return {
                title:title,
                subtitle:"Tanfolyamok:" + courseName
            }
        }
    }
}