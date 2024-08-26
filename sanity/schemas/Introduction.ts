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
        prepare(selection:Record<string, any>) {
            const array = selection.title as { _key: string; value: string }[] | undefined;
            const title = array?.[0]?.value || "Untitled";
            return {
              title: title,
            };
          },
        
    }
}