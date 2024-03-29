import {Rule} from "@sanity/types"

export const Tag = {
    name:"tag",
    title:"Címke",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"string",
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"type",
            title:"Típus",
            type:"string",
            validate:(Rule:Rule)=>Rule.required()
        }
    ]
}