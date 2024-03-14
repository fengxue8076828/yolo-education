import { Rule } from "@sanity/types"

export const Program = {
    name:"program",
    title:"Program",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"string",
        },
        {
            name:"subject",
            title:"Tantárgy",
            type:"string",
        },
        {
            name:"time",
            title:"Idő",
            type:"datetime",
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
              }
        },
        {
            name:"location",
            title:"Elhelyezkedés",
            type:"string"
        },
        {
            name:"teacher",
            title:"Tanár",
            type:"reference",
            to:[{type:"teacher"}]
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
                hotspot:true
            }
        },
        {
            name:"twitterLink",
            title:"TwitterLink",
            type:"url",
        },
        {
            name:"facebookLink",
            title:"FacebookLink",
            type:"url",
        },
        {
            name:"youtubeLink",
            title:"YoutubeLink",
            type:"url"
        },
        {
            name:"price",
            title:"Ár",
            type:"string"
        },
        {
            name:"category",
            title:"kategória",
            type:"reference",
            to:[{type:"programCategory"}],
            validate:(Rule:Rule) => Rule.required()
        }
    ]
}