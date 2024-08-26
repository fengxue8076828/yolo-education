export const HeaderText = {
    name:"headerText",
    title:"Fejléc",
    type:"document",
    fields:[
        {
            name:"slogan",
            title:"Szlogen",
            type:"internationalizedArrayString"
        },
        {
            name:"content",
            title:"Tartalom",
            type:"internationalizedArrayString"
        }
        
    ],
    preview:{
        select:{
            title:"slogan",
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