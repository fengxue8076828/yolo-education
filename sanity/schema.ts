import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './schemas/Category'
import { Teacher } from './schemas/Teacher'
import { Course } from './schemas/Course'
import { Chapter } from './schemas/Chapter'
import {Program} from './schemas/Program'
import {Article} from './schemas/Article'
import {HeaderText} from './schemas/HeaderText'
import { Feature } from './schemas/Feature'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,Teacher,Course,Chapter,Program,Article,HeaderText,Feature],
}
