import {Rule} from "@sanity/types"

export const Teacher = {
    name:"teacher",
    title:"Tanár",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"string",
        },
        {
            name:"title",
            title:"Cím",
            type:"string",
        },
        {
            name:"charactor",
            title:"Stílus",
            type:"string"
        },
        {
            name:"description",
            title:"Leírás",
            type:"array",
            of:[{type:"block"}]
        },
        {
            name:"image",
            title:"Kép",
            type:"image",
            options:{
                hotspot:true,
            }
        },
        {
            name:"category",
            title:"Tanári kategória",
            type:"reference",
            to:[{type:"teacherCategory"}],
            validation:(Rule:Rule) => Rule.required()
        }
    ]
}