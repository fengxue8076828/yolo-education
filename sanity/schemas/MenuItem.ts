import {Rule} from "@sanity/types"
import { Preview } from "sanity"

export const MenuItem = {
    name:"menuitem",
    title:"Menuitem",
    type:"document",
    fields:[
        {
            name:"serial",
            title:"Serial",
            type:"number",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"parent",
            title:"Parent",
            type:"reference",
            to:[{type:"menuitem"}]
        },
        {
            name:"text",
            title:"Text",
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
              subtitle: parentText ? `Parent: ${parentText}` : 'Top menu', // Displaying parent's name in the subtitle
            };
          },
        
    }
}