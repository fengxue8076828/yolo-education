import { Rule } from "@sanity/types"

export const Introduction = {
    name:"introduction",
    title:"Bevezetés",
    type:"document",
    fields:[
        {
            name:"title",
            title:"cím",
            type:"string",
            validation:(Rule:Rule) => Rule.required()

        },
        {
            name:"text",
            title:"szöveg",
            type:"string",  
            validation:(Rule:Rule) => Rule.required()
        }
    ]
}