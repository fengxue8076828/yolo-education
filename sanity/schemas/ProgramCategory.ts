export const ProgramCategory = {
    name:"programCategory",
    title:"program kategória",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"internationalizedArrayString",
        }
    ],
    preview:{
        select:{
            title:"name",
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