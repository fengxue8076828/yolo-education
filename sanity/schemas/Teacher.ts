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
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"title",
            title:"Cím",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"charactor",
            title:"Stílus",
            type:"internationalizedArrayString"
        },
        {
            name:"descriptionhu",
            title:"Leírás Magyar",
            type:"array",
            of:[{type:"block"}],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"descriptionen",
            title:"Leírás Angolul",
            type:"array",
            of:[{type:"block"}],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"descriptioncn",
            title:"Leírás Kinai",
            type:"array",
            of:[{type:"block"}],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"image",
            title:"Kép",
            type:"image",
            options:{
                hotspot:true,
            },
            validation:(Rule:Rule)=>Rule.required()
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