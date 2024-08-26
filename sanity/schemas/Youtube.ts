import { Rule } from "@sanity/types"

export const Youtube = {
    name:"youtube",
    Title:"Youtube",
    type:"document",
    fields:[
        {
            name:"title",
            title:"cím",
            type:"internationalizedArrayString",
            validation:(Rule:Rule) => Rule.required()
        },
        {
            name:"text",
            title:"szöveg",
            type:"internationalizedArrayString",
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