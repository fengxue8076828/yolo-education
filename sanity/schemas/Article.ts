import {Rule} from '@sanity/types'

const slugify = (input: any) => {
    const englishName = input.find((item: { _key: string }) => item._key === 'en')?.value || 'default-slug'
    return englishName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .slice(0, 200)
  }

export const Article = {
    name:"article",
    title:"Cikk",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Cím",
            type:"internationalizedArrayString",
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"slug",
            title:"Meztelen csiga",
            type:"slug",
            options:{
                source:"title",
                slugify:slugify,
            },
            validation:(Rule:Rule)=>Rule.required()
        },
        {
            name:"contenthu",
            title:"Tartalom Magyar",
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
            name:"contenten",
            title:"Tartalom Angolul",
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
            name:"contentcn",
            title:"Tartalom Kínai",
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
    ],
    preview:{
        select:{
            title:"title",
        },
        prepare(selection:{title:{_key:string,value:string}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}