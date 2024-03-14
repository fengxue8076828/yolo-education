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
            type:"string",
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
        prepare(selection:{title:string,parentText:string}) {
            const { title, parentText } = selection;
            return {
              title: title,
              subtitle: parentText ? `Szülő: ${parentText}` : 'Főmenü', // Displaying parent's name in the subtitle
            };
          },
        
    }
}