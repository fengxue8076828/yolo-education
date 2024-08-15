import {Rule} from '@sanity/types'
import { validation } from 'sanity'

export const ExamCategory = {
    name:"examCategory",
    title:"VizsgaKategória",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Név",
            type:"string",
            validation:(Rule:Rule) => Rule.required()
        }
    ]
}