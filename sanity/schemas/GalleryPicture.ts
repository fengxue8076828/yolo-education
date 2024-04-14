import {Rule} from "@sanity/types"

export const GalleryPicture = {
    name:"galleryPicture",
    title:"Galéria kép",
    type:"document",
    fields:[
        {
            name:"image",
            title:"kép",
            type:"image",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"title",
            title:"cím",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"url",
            title:"Url",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        }
    ]
}