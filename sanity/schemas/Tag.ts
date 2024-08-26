import {Rule} from "@sanity/types"

export const Tag = {
    name:"tag",
    title:"Címke",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"type",
            title:"Típus",
            type:"string",
            validation:(Rule:Rule)=>Rule.required()
        }
    ],
    preview:{
        select:{
            title:"name",
        },
        prepare(selection:{title:{_key:string,value:"string"}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}