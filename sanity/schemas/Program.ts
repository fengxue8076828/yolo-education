import { Rule } from "@sanity/types"

export const Program = {
    name:"program",
    title:"Program",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"subject",
            title:"Tantárgy",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"time",
            title:"Idő",
            type:"datetime",
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
              },
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"location",
            title:"Elhelyezkedés",
            type:"string",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"teacher",
            title:"Tanár",
            type:"reference",
            to:[{type:"teacher"}],
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"descriptionhu",
            title:"Leírás Magyar",
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
            name:"descriptionen",
            title:"Leírás Angolul",
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
            name:"descriptioncn",
            title:"Leírás Kinai",
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
            name:"image",
            title:"Kép",
            type:"image",
            options:{
                hotspot:true
            },
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"tiktokLink",
            title:"TwitterLink",
            type:"url",
        },
        {
            name:"xiaohongshuLink",
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
            validation:(Rule:Rule) => Rule.required()
        }
    ],
    preview:{
        select:{
            title:"name",
        },
        prepare(selection:Record<string, any>) {
            const array = selection.title as { _key: string; value: string }[] | undefined;
            const title = array?.[0]?.value || "Untitled";
            return {
              title: title,
            };
          },     
    }
}