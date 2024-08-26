export const FooterGroup = {
    name:"footerGroup",
    title:"Lábléc csoport",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Cím",
            type:"internationalizedArrayString"
        },
        {
            name:"links",
            title:"Linkek",
            type:"array",
            of:[{type:"link"}]
        }
    ],
    preview:{
        select:{
            title:"title",
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