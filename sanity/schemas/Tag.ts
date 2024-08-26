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
        prepare(selection:Record<string, any>) {
            const array = selection.title as { _key: string; value: string }[] | undefined;
            const title = array?.[0]?.value || "Untitled";
            return {
              title: title,
            };
          },     
    }
}