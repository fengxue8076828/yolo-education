import {Rule} from '@sanity/types'

export const Course =  {
    name:"course",
    title:"Tanfolyam",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"string",
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength:90
            }
        },
        {
            name:"subTitle",
            title:"Felirat",
            type:"string",
        },
        {
            name:"description",
            title:"Leírás",
            type:"array",
            of:[{type:"block"}],
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"price",
            title:"Ár",
            type:"string",
            validate:(Rule:Rule)=>Rule.integer().positive()
        },
        {
            name:"image",
            title:"Kép",
            type:"image",
            options:{
                hotspot:true,
            },
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"category",
            title:"Kategória",
            type:"reference",
            to:[{type:"category"}],
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"startDate",
            title:"Kezdő dátum",
            type:"array",
            of:[{type:"date"}],
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"classTime",
            title:"Osztály ideje",
            type:"string",
            description:"Az óra kezdési időpontja.formátum ÓÓ:PP - ÓÓ:PP egy nap egy héten pl. 17:30 - 19:00 minden hétfőn",
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"lectures",
            title:"Előadások",
            type:"number",
            validation: (Rule:Rule) => Rule.min(1),
            initialValue: 1
        },
        {
            name:"duration",
            title:"Időtartam (hetekben)",
            type:"number",
            description:"A tanfolyam heteinek száma",
            validation:(Rule:Rule) => Rule.integer().positive()

        },
        {
            name:"quizzes",
            title:"Kvízek",
            type:"number",
            validation:(Rule:Rule) => Rule.integer().positive()
        },
        {
            name:"teacher",
            title:"Kvízek",
            type:"reference",
            to:[{type:"teacher"}],
            validate:(Rule:Rule)=>Rule.required()
        },
        {
            name:"onWindow",
            title:"az ablakon",
            type:"boolean"
        },
        {
            name:"location",
            title:"Elhelyezkedés",
            type:"string",
            validate:(Rule:Rule)=>Rule.required()
        }
    ]
}