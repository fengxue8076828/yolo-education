import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './schemas/Category'
import { Teacher } from './schemas/Teacher'
import { Course } from './schemas/Course'
import { Chapter } from './schemas/Chapter'
import {Program} from './schemas/Program'
import {Article} from './schemas/Article'
import {HeaderText} from './schemas/HeaderText'
import { Feature } from './schemas/Feature'
import { Testimonial } from './schemas/Testimonial'
import { Registration } from './schemas/Registration'
import { Tag } from './schemas/Tag'
import { Link } from './schemas/Link'
import { FooterGroup } from './schemas/FooterGroup'
import { Footer } from './schemas/Footer'
import { MenuItem } from './schemas/MenuItem'
import {Introduction} from './schemas/Introduction'
import { Youtube } from './schemas/Youtube'
import { ProgramCategory } from './schemas/ProgramCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,Teacher,Course,Chapter,Program,Article,HeaderText,Feature,Testimonial,Registration,Tag,Link,FooterGroup,Footer,MenuItem,Introduction,Youtube,ProgramCategory],
}
