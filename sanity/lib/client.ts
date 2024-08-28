import { createClient } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2024-01-05",
  dataset,
  projectId,
  useCdn:true,
  token:"skDNkLsrurPQW0s4EuIMU2FjUvCgZ3usH0gUZSEw1CPgqUwC6X2QwKB4Lspqh1P2pzwAjZpsjKFV4HVO1bJ7tA9xOUmt58WkRKIFMrQFY5pPjngCNvEox8LWDz1tGqUtLSoeQKMangYvFtgzLG2CwktGyOGrEvTF7FY2FBm6uw5JzAnaximg"  
})

const imageBuilder = imageUrlBuilder(client)
export const urlFor = (source:string) => imageBuilder.image(source)
