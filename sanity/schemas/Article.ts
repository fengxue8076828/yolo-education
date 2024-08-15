export const Article = {
    name:"article",
    title:"Cikk",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Cím",
            type:"string",
        },
        {
            name:"slug",
            title:"Meztelen csiga",
            type:"slug",
            options:{
                source:"title"
            }
        },
        {
            name:"content",
            title:"Tartalom",
            type:"array",
            of:[
                {
                    type:"block",
                },
                {
                    type:"image",
                    options:{hotspots:true},
                }
            ]
        },
        // {
        //     name:"image",
        //     title:"Kép",
        //     type:"image",
        //     options:{
        //         hotspot:true
        //     }
        // }
    ]
}