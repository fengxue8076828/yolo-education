import { PortableTextBlock } from 'sanity'
import {client} from './client'

export interface CategoryType {
    _id:string,
    name:string,
}

export interface TeacherType {
    _id:string,
    name:string,
    title:string,
    charactor:string,
    description:PortableTextBlock[],
    image:string

}

export interface CourseType {
    _id:string,
    name:string,
    title:string
    slug:string,
    description:PortableTextBlock[],
    price:string,
    image:string,
    category:CategoryType,
    startDate:Date
    classTime:string,
    classLocation:string,
    lectures:number,
    duration:string,
    quizzes:number,
    teacher:TeacherType

}
export interface ChapterType {
    _id:string,
    sequence:number,
    name:string,
    content:PortableTextBlock[],
    course:CourseType
}
export interface ProgramType {
    _id:string,
    name:string,
    subject:string,
    description:PortableTextBlock[],
    time:string,
    location:string,
    teacher:TeacherType,
    image:string,
    price:string,
    twitterLink:string,
    facebookLink:string,
    youtubeLink:string,
}
export interface ArticleType {
    title:string,
    slug:string,
    content:PortableTextBlock[],
    image:string
}
export interface HeaderTextType {
    slogan:string,
    content:string
}
export interface FeatureType {
    _id:string,
    title:string,
    content:string
}
export async function getTeachers():Promise<TeacherType[]> {
    const query = `*[_type=="teacher"]`
    const data = await client.fetch(query)
    return data
}
export async function getCourses():Promise<CourseType[]> {
    const query = `*[_type=="course"]`
    const data = await client.fetch(query)
    return data 
}
export async function getCoursesOnWindow():Promise<CourseType[]> {
    const query = `*[_type=="course" && onWindow==true ]{
        _id,
        name,
        title,
        image,
        startDate,
        "teacher":teacher->{
            name,
            image
        },
    }`
    const data = await client.fetch(query)
    return data 
}

export async function getCategories():Promise<CategoryType[]>{
    const query = `*[_type=="category"]`
    const data = await client.fetch(query)
    return data
}
export async function getCoursesByCategory(id:string):Promise<CourseType[]>{
    const query = `*[_type=="course" && category._ref=="${id}"]{
        _id,
        name,
        title,
        image,
        startDate,
        "teacher":teacher->{
            name,
            image
        },
    }`
    const data = await client.fetch(query)
    return data
}
export async function getCourseById(id:string):Promise<CourseType>{
    const query = `*[_type=="course" && _id=="${id}"]
    {
        _id,
        name,
        title,
        image,
        startDate,
        description,
        startData,
        classTime,
        classLocation,
        price,
        lectures,
        duration,
        quizzes,
        "teacher":teacher->{
            name,
            title,
            charactor,
            image,
            description
        },
        "category":category->{
            name
        }
    }`
    const data = await client.fetch(query)
    return data[0]
}
export async function getChaptersByCourse(id:string):Promise<ChapterType[]>{
    const query = `*[_type=="chapter" && course._ref=="${id}"] | order(sequence)`
    const data = await client.fetch(query)
    return data
}

export async function getPrograms():Promise<ProgramType[]>{
    const query = `*[_type=="program"] | order(time){
        _id,
        name,
        subject,
        time,
        location,
        image,
        description,
        "teacher":teacher->{
            name,
            image   
        }
    }`
    const data = await client.fetch(query)
    return data  
}

export async function getProgramById(id:string):Promise<ProgramType>{
    const query = `*[_type=="program" && _id=="${id}"]{
        _id,
        name,
        subject,
        time,
        location,
        image,
        description,
        "teacher":teacher->{
            name,
            image   
        }
    }`
    const data = await client.fetch(query)
    return data[0]  
}

export async function getArticleBySlug(slug:string):Promise<ArticleType>{
    const query = `*[_type=="article" && slug.current == "${slug}"]`
    const data = await client.fetch(query)
    return data[0]
}

export async function getHeaderText():Promise<HeaderTextType>{
    const query = `*[_type=="headerText"]`
    const data = await client.fetch(query)
    return data[0]
}

export async function getFeatures():Promise<FeatureType[]>{
    const query = `*[_type=="feature"]`
    const data = await client.fetch(query)
    return data
}