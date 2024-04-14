import {Rule} from "@sanity/types"

export const ForeignStudyCover  = {
    name:"foreignStudyCover",
    title:"külföldi tanulmányi borító",
    type:"document",
    fields:[
        {
            name:"subtitle",
            title:"felirat",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"title",
            title:"cím",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"slug",
            title:"meztelen csiga",
            type:"slug",
            options:{
                source:"subtitle",
            },
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"text",
            title:"szöveg",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"features",
            title:"jellemzők",
            type:"array",
            of:[{type:"string"}],
            validation:(Rule:Rule) => Rule.required().max(2).error("Ebben a tömbben legfeljebb 5 elem lehet.")
        },
        {
            name:"content",
            title:"tartalom",
            type:"array",
            of:[{type:"block"}],
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
    ]
}