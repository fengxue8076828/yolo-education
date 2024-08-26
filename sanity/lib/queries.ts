import { PortableTextBlock } from 'sanity'
import {client} from './client'
import internationalizedArrayString from 'sanity-plugin-internationalized-array';

export interface CategoryType {
    _id:string,
    name:{_key:string,value:string}[],
}
export interface TeacherCategoryType {
    _id:string,
    name:{_key:string,value:string}[]
}

export interface TeacherType {
    _id:string,
    name:string,
    title:{_key:string,value:string}[],
    charactor:{_key:string,value:string}[],
    descriptionhu:PortableTextBlock[],
    descriptionen:PortableTextBlock[],
    descriptioncn:PortableTextBlock[],
    image:string,
    teacherCategory:TeacherCategoryType,

}

export interface CourseType {
    _id:string,
    name:{_key:string,value:"string"}[],
    subTitle:{_key:string,value:"string"}[],
    slug:string,
    descriptionhu:PortableTextBlock[],
    descriptionen:PortableTextBlock[],
    descriptioncn:PortableTextBlock[],
    price:string,
    image:string,
    category:CategoryType,
    startDate:string[],
    classTime:string,
    lectures:number,
    duration:number,
    teacher:TeacherType,
    location:{_key:string,value:"string"}[],

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
    name:{_key:string,value:"string"}[],
    subject:{_key:string,value:"string"}[],
    descriptionhu:PortableTextBlock[],
    descriptionen:PortableTextBlock[],
    descriptioncn:PortableTextBlock[],
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
    title:{_key:string,value:string}[],
    slug:string,
    contenthu:PortableTextBlock[],
    contenten:PortableTextBlock[],
    contentcn:PortableTextBlock[],
    // image:string
}
export interface HeaderTextType {
    slogan:{_key:string,value:string}[],
    content:{_key:string,value:string}[]
}
export interface FeatureType {
    _id:string,
    title:{_key:string,value:string}[],
    content:{_key:string,value:string}[]
}
export interface TestimonialType {
    _id:string,
    name:string,
    contenthu:PortableTextBlock[],
    contenten:PortableTextBlock[],
    contentcn:PortableTextBlock[],
    image:string
}

export interface RegistrationType {
    _type:string,
    name:string,
    email:string,
    message:string,
    type:string,
    activityName:string,
    startDate?:string
}

export interface TagType {
    name:{_key:string,value:string}[],
    type:string
}

export interface LinkType {
    text:{_key:string,value:string}[],
    url:string
}

export interface FooterGroupType {
    title:{_key:string,value:string}[],
    links:LinkType[]
}

export interface Footertype {
    groups:FooterGroupType[],
    telephone:string,
    mobilephone:string,
    email:string,
    address:string,
    wechat:string,
    tiktok:string,
    xiaohongshu:string,
    facebook:string,
    instagram:string,
    youtube:string,
    description:{_key:string,value:string}[]
}

export interface MenuitemType{
    _id:string,
    serial:number,
    text:{_key:string,value:string}[],
    parent:MenuitemType | null,
    link:string,
}

export interface YoutubeType{
    title:{_key:string,value:string}[],
    text:{_key:string,value:string}[],
    youtubeChannelUrl:string,
    youtubeHomeUrl:string,
}

export interface IntroductionType{
    title:{_key:string,value:string}[],
    text:{_key:string,value:string}[]
}

export interface ProgramCategoryType{
    _id:string,
    name:{_key:string,value:string}[]
}

export interface ExamCategoryType{
    _id:string,
    name:{_key:string,value:string}[]
}

export interface ExamType{
    _id:string,
    name:{_key:string,value:string}[],
    logo:string,
    description:{_key:string,value:string}[],
    category:ExamCategoryType,
    link:string
}

export interface ForeignStudyCoverType{
    _id:string,
    subtitle:{_key:string,value:string}[],
    slug:{
        _type:"slug",
        current:string
    },
    title:{_key:string,value:string}[], 
    text:{_key:string,value:string}[],
    contenthu:PortableTextBlock[],
    contenten:PortableTextBlock[],
    contentcn:PortableTextBlock[],
    features:{text:{_key:string,value:string}[]}[],
    pictures:string[],
    coverImage:string,
}

export interface GalleryPicture {
    _id:string,
    image:string,
    title:string,
    url:string,
}

export async function getExamCategories():Promise<ExamCategoryType[]> {
    const query = `*[_type=="examCategory"]`
    const data = await client.fetch(query)
    return data
}

export async function getExamsByCategory(categoryId:string):Promise<ExamType[]> {
    const query = `*[_type=="exam" && category._ref=="${categoryId}"]`
    const data = await client.fetch(query)
    return data
}


export async function getGalleryPictures():Promise<GalleryPicture[]> {
    const query = `*[_type=="galleryPicture"]`
    const data = await client.fetch(query)
    return data
}
    

export async function getForeignStudyCovers():Promise<ForeignStudyCoverType[]> {
    const query = `*[_type=="foreignStudyCover"]`
    const data = await client.fetch(query)
    return data
}

export async function getForeignStudyCoverBySlug(slug:string):Promise<ForeignStudyCoverType> {
    const query = `*[_type=="foreignStudyCover" && slug.current=="${slug}"]`
    const data = await client.fetch(query)
    return data[0]
}

export async function getTeachers():Promise<TeacherType[]> {
    const query = `*[_type=="teacher"]`
    const data = await client.fetch(query)
    return data
}

export async function getTeachersByCategory(categoryId:string):Promise<TeacherType[]> {
    const query = `*[_type=="teacher" && category._ref=="${categoryId}"]`
    const data = await client.fetch(query)
    return data
}

export async function getTeachersByTitle(keyword:string,lang:string):Promise<TeacherType[]> {
    const query = `*[_type=="teacher" && (title[_key=="${lang}"].value match "*${keyword}*")]`
    const data = await client.fetch(query)
    return data
}

export async function getTeacherById(id:string):Promise<TeacherType> {
    const query = `*[_type=="teacher" && _id=="${id}"]`
    const data = await client.fetch(query)
    return data[0]

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
        subTitle,
        image,
        startDate,
        price,
        "teacher":teacher->{
            name,
            image
        },
    }`
    const data = await client.fetch(query)

    if (data.length > 8){
        return data.slice(0,8)
    }
    return data 
}

export async function getCoursesByName(keyword:string,lang:string):Promise<CourseType[]> {
    const query = `*[_type=="course" && name[_key=="${lang}"].value match "*${keyword}*"]{
        _id,
        name,
        subTitle,
        image,
        startDate,
        price,
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
export async function getCoursesByTeacher(id:string):Promise<CourseType[]>{
    const query = `*[_type=="course" && teacher._ref=="${id}"]{
        _id,
        name,
        subTitle,
        image,
        startDate,
        price,
        "teacher":teacher->{
            name,
            image
        },
    }`
    const data = await client.fetch(query)
    return data
}
export async function getCoursesByCategory(id:string):Promise<CourseType[]>{
    const query = `*[_type=="course" && category._ref=="${id}"]{
        _id,
        name,
        subTitle,
        image,
        startDate,
        price,
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
        subTitle,
        image,
        startDate,
        descriptionhu,
        descriptionen,
        descriptioncn,
        startData,
        classTime,
        location,
        price,
        lectures,
        duration,
        "teacher":teacher->{
            name,
            title,
            charactor,
            image,
            descriptionhu,
            descriptionen,
            descriptioncn,
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

export async function getProgramCategories():Promise<ProgramCategoryType[]>{
    const query = `*[_type=="programCategory"]`
    const data = await client.fetch(query)
    return data
}

export async function getTeacherCategories():Promise<TeacherCategoryType[]>{
    const query = `*[_type=="teacherCategory"]`
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
        descriptionhu,
        descriptionen,
        descriptioncn,
        "teacher":teacher->{
            name,
            image   
        }
    }`
    const data = await client.fetch(query)
    return data  
}

export async function getProgramsByName(keyword:string,lang:string):Promise<ProgramType[]> {
    const query = `*[_type=="program" && (name[_key=="${lang}"].value match "*${keyword}*")]{
        _id,
        name,
        subject,
        time,
        location,
        image,
        descriptionhu,
        descriptionen,
        descriptioncn,
        "teacher":teacher->{
            name,
            image   
        }
    }`
    const data = await client.fetch(query)
    return data 
}

export async function getProgramsByCategory(id:string):Promise<ProgramType[]>{
    const query = `*[_type=="program" && category._ref=="${id}"] | order(time){
        _id,
        name,
        subject,
        time,
        location,
        image,
        descriptionhu,
        descriptionen,
        descriptioncn,
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
        descriptionhu,
        descriptionen,
        descriptioncn,
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

export async function getTestimonials():Promise<TestimonialType[]>{
    const query = `*[_type=="testimonial"]`
    const data = await client.fetch(query)
    return data
}
export async function getTags(type:string):Promise<TagType[]>{
    const query = `*[_type=="tag" && type=="${type}"]`
    const data = await client.fetch(query)
    return data
}
export async function getFooter():Promise<Footertype>{
    const query = `*[_type=="footer"]`
    const data = await client.fetch(query)
    return data[0]
}

export async function getTopMenu():Promise<MenuitemType[]>{
    const query = `*[_type=="menuitem" && parent==null] | order(serial)`
    const data = await client.fetch(query)
    return data
}

export async function getSubMenu(menuId:string):Promise<MenuitemType[]>{
    const query = `*[_type=="menuitem" && parent._ref=="${menuId}"] | order(serial)`
    const data = await client.fetch(query)
    return data
}

export async function getIntroduction():Promise<IntroductionType|null>{
    const query = `*[_type=="introduction"]`
    const data = await client.fetch(query)
    if(data && data.length > 0){
        return data[0]
    }   
    else{
        return null
    }
}

export async function getYoutube():Promise<YoutubeType|null>{
    const query = `*[_type=="youtube"]`
    const data = await client.fetch(query)
    if(data && data.length > 0){
        return data[0]
    }   
    else{
        return null
    }
}