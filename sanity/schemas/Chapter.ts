import { PortableText } from "@portabletext/react";
import { Rule } from "@sanity/types";

export const Chapter = {
    name:"chapter",
    title:"Chapter",
    type:"document",
    fields:[
        {
            name:"sequence",
            title:"Sequence",
            type:"number",
            validation:(Rule:Rule) => Rule.min(0),
            initialValue:0
        },
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"content",
            title:"Content",
            type:"array",
            of:[{type:"block"}]
        },
        {
            name:"course",
            title:"Course",
            type:"reference",
            to:[{type:"course"}]
        }
    ]
}