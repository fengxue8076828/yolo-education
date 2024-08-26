import {Rule} from '@sanity/types'

export const Exam = {
    name:"exam",
    title:"Vizsgálat",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"logo",
            title:"Logo",
            type:"image",
            options:{
                hotspot:true
            },
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"description",
            title:"Leírás",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"category",
            title:"kategória",
            type:"reference",
            to:[{type:"examCategory"}],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"link",
            title:"Link",
            type:"string"
        }
    ],
    preview:{
        select:{
            title:"name",
        },
        prepare(selection:{title:{_key:string,value:string}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}