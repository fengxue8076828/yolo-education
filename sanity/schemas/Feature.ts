import {Rule} from '@sanity/types'

export const Feature = {
    name:"feature",
    title:"Funkció",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Cím",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"content",
            title:"Tartalom",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
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