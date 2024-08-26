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
        prepare(selection:{title:{_key:string,value:"string"}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}