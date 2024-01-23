export const FooterGroup = {
    name:"footerGroup",
    title:"FooterGroup",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string"
        },
        {
            name:"links",
            title:"Links",
            type:"array",
            of:[{type:"link"}]
        }
    ]
}