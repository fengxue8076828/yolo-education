import {Rule} from "@sanity/types"
import { Preview } from "sanity"

export const MenuItem = {
    name:"menuitem",
    title:"Menü tétel",
    type:"document",
    fields:[
        {
            name:"serial",
            title:"Sorozatszám",
            type:"number",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"parent",
            title:"Szülő",
            type:"reference",
            to:[{type:"menuitem"}]
        },
        {
            name:"text",
            title:"Szöveg",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"link",
            title:"Link",
            type:"string",
        },
    ],
    preview:{
        select:{
            title:"text",
            parentText:"parent.text"
        },
        prepare(selection:{title:{_key:string,value:string}[],parentText:{_key:string,value:"string"}[]}) {
            const { title, parentText } = selection;
            return {
              title: title[0].value,
              subtitle: parentText ? `Szülő: ${parentText[0].value}` : 'Főmenü', // Displaying parent's name in the subtitle
            };
          },
        
    }
}