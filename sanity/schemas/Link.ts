export const Link = {
    name:"link",
    title:"Link",
    type:"document",
    fields:[
        {
            name:"text",
            title:"Szöveg",
            type:"internationalizedArrayString"
        },
        {
            name:"url",
            title:"Url",
            type:"url"
        }
    ],
    preview:{
        select:{
            title:"text",
        },
        prepare(selection:{title:{_key:string,value:string}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}