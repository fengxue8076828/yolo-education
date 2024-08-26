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
        prepare(selection:{title:{_key:string,value:"string"}[]}) {
            const { title } = selection;
            return {
              title: title[0].value,
            };
          },
        
    }
}