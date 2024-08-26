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
        prepare(selection:{title:{_key:string,value:"string"}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}