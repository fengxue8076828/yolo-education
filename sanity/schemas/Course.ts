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
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"slug",
            title:"Meztelen csiga",
            type:"slug",
            options:{
                source:"name",
                maxLength:90
            },
            validation:(Rule:Rule)=>Rule.required()
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
            of:[
                {
                    type:"block",
                },
                {
                    type:"image",
                    options:{hotspots:true},
                }
            ],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"price",
            title:"Ár",
            type:"number",
            validation:(Rule:Rule)=>Rule.integer().positive()
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
            title:"Kategória",
            type:"reference",
            to:[{type:"category"}],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"startDate",
            title:"Kezdő dátum",
            type:"array",
            of:[
                {
                    type:"datetime",
                    options: {
                        dateFormat: 'YYYY-MM-DD',
                        timeFormat: 'HH:mm',
                        calendarTodayLabel: 'Today'
                      }
                }
            ],
            validation:(Rule:Rule)=>Rule.required().min(1)
        },
        {
            name:"classTime",
            title:"Osztály ideje",
            type:"string",
            description:"Az óra kezdési időpontja.formátum ÓÓ:PP - ÓÓ:PP egy nap egy héten pl. 17:30 - 19:00 minden hétfőn",
            validation:(Rule:Rule)=>Rule.required()
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
            name:"teacher",
            title:"Tanár",
            type:"reference",
            to:[{type:"teacher"}],
            validation:(Rule:Rule)=>Rule.required()
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
            validation:(Rule:Rule)=>Rule.required()
        }
    ]
}