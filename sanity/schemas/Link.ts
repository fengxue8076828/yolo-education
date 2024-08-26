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
        prepare(selection:Record<string, any>) {
            const array = selection.title as { _key: string; value: string }[] | undefined;
            const title = array?.[0]?.value || "Untitled";
            return {
              title: title,
            };
          },
        
    }
}