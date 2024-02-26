import { Rule } from "@sanity/types"

export const Program = {
    name:"program",
    title:"Program",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
        },
        {
            name:"subject",
            title:"Subject",
            type:"string",
        },
        {
            name:"time",
            title:"Time",
            type:"datetime",
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
              }
        },
        {
            name:"location",
            title:"Location",
            type:"string"
        },
        {
            name:"teacher",
            title:"Teacher",
            type:"reference",
            to:[{type:"teacher"}]
        },
        {
            name:"description",
            title:"Description",
            type:"array",
            of:[{type:"block"}]
        },
        {
            name:"image",
            title:"Image",
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
            title:"Price",
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