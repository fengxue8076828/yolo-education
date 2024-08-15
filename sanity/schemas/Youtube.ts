import { Rule } from "@sanity/types"

export const Youtube = {
    name:"youtube",
    Title:"Youtube",
    type:"document",
    fields:[
        {
            name:"title",
            title:"cím",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"text",
            title:"szöveg",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"youtubeChannelUrl",
            title:"Youtube csatorna URL-je",
            type:"url",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"youtubeHomeUrl",
            title:"Youtube foöldal URL-je",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        }
    ]
}