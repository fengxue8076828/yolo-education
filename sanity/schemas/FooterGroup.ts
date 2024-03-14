export const FooterGroup = {
    name:"footerGroup",
    title:"Lábléc csoport",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Cím",
            type:"string"
        },
        {
            name:"links",
            title:"Linkek",
            type:"array",
            of:[{type:"link"}]
        }
    ]
}