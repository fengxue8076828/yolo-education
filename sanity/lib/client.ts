import { createClient } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2024-01-05",
  dataset:"yolo-education",
  projectId:"hq8ftxuw",
  useCdn:true,
  token:"skapjz9dSlefaTPx2ejYc5WwQzWOxjvLT4mAmvraFMgq3XQPpJ1eD6fVQQLcalifI8PWaImYFNz8Sy88MWU8oweq2ZtO3zsZvwNR1zjaUltIvVZwbzOOOJ9ubNC4Q3d2TkEPpps39Ca0IMDev5e3t7NROLKAWHqhdKKd8WjpnAHWFYxeYrc4"
})

const imageBuilder = imageUrlBuilder(client)
export const urlFor = (source:string) => imageBuilder.image(source)
