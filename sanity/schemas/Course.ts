import {Rule} from '@sanity/types'
import internationalizedArray from 'sanity-plugin-internationalized-array';
import {defineType, defineField} from 'sanity';

const slugify = (input: any) => {
    const englishName = input.find((item: { _key: string }) => item._key === 'en')?.value || 'default-slug'
    return englishName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .slice(0, 200)
  }

export const Course =  {
    name:"course",
    title:"Tanfolyam",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"slug",
            title:"Meztelen csiga",
            type:"slug",
            options:{
                source:"name",
                slugify:slugify,
                maxLength:90
            },
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"subTitle",
            title:"Felirat",
            type:"internationalizedArrayString",
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
            title:"Leírás Kínai",
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
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        }
    ],
    preview:{
        select:{
            title:"name",
        },
        prepare(selection:{title:{_key:string,value:"string"}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}