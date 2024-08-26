export const Testimonial = {
  name:"testimonial",
  title:"Ajánlólevél",
  type:"document",
  fields:[
    {
      name:"name",
      title:"Név",
      type:"string"
    },
    {
      name:"contenthu",
      title:"Tartalom Magyar",
      type:"array",
      of:[{type:"block"}]
    },
    {
      name:"contenten",
      title:"Tartalom Angolul",
      type:"array",
      of:[{type:"block"}]
    },
    {
      name:"contentcn",
      title:"Tartalom Kinai",
      type:"array",
      of:[{type:"block"}]
    },
    {
      name:"image",
      title:"Kép",
      type:"image",
      options:{
        hotspot:true
      }
    }
  ]
}