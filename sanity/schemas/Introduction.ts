import { Rule } from "@sanity/types"

export const Introduction = {
    name:"introduction",
    title:"Bevezetés",
    type:"document",
    fields:[
        {
            name:"title",
            title:"cím",
            type:"internationalizedArrayString",
            validation:(Rule:Rule) => Rule.required()

        },
        {
            name:"text",
            title:"szöveg",
            type:"internationalizedArrayString",  
            validation:(Rule:Rule) => Rule.required()
        }
    ],
    preview:{
        select:{
            title:"title",
        },
        prepare(selection:{title:{_key:string,value:string}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}