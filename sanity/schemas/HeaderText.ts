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
        prepare(selection:{title:{_key:string,value:string}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}