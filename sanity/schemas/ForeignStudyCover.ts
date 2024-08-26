import {Rule} from "@sanity/types"

const slugify = (input: any) => {
    const englishName = input.find((item: { _key: string }) => item._key === 'en')?.value || 'default-slug'
    return englishName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .slice(0, 200)
  }

export const ForeignStudyCover  = {
    name:"foreignStudyCover",
    title:"külföldi tanulmányi borító",
    type:"document",
    fields:[
        {
            name:"subtitle",
            title:"felirat",
            type:"internationalizedArrayString",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"title",
            title:"cím",
            type:"internationalizedArrayString",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"slug",
            title:"meztelen csiga",
            type:"slug",
            options:{
                source:"subtitle",
                slugify:slugify
            },
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"text",
            title:"szöveg",
            type:"internationalizedArrayString",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"features",
            title:"jellemzők",
            type:"array",
            of:[
                {
                    type:"object",
                    fields:[
                        {
                            name:'text',
                            titile:'text',
                            type:"internationalizedArrayString",
                            validation:(Rule:Rule) => Rule.required()
                        }
                    ],
                    preview:{
                        select:{
                            title:"text",
                        },
                        prepare(selection:{title:{_key:string,value:"string"}[]}) {
                            const { title } = selection;
                            return {
                              title: title[0].value,
                            };
                          },
                        
                    }
                }
            ],
            validation:(Rule:Rule) => Rule.required().max(3).error("Ebben a tömbben legfeljebb 3 elem lehet.")
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
            validation:(Rule:Rule) => Rule.required()
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
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"contentcn",
            title:"Tartalom Kinai",
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
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"pictures",
            title:"képeket",
            type:"array",
            of:[{type:"image"}],
            validation:(Rule:Rule) => Rule.required().min(3).error("Kérjük, válasszon legalább három képet")
        },
        {
            name:"coverImage",
            title:"borítókép",
            type:"image",
            options:{
                hotspot:true,
            },
            validation:(Rule:Rule) => Rule.required()
        }
    ],
    preview:{
        select:{
            title:"title",
        },
        prepare(selection:{title:{_key:string,value:"string"}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}