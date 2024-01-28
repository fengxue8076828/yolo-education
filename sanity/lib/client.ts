import { createClient } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2024-01-05",
  dataset,
  projectId,
  useCdn:true,
  token:"sktjnZBVrwxN9wq3XeorH3jvZmjp4WIzZPifjNuUfsA9EVCNTLmgEZ9zENmS1R3fAJKIZTme5AG0klG8RBGuH39KTkb8mUyOOkZNQSOdXDKK6c8TvRGZ0rjb7RqgpLLSWlGvPAek7CU3RO0Xqt919uCTd8Nn6MdhMfbkidoYwrysjILURBcg"  
})

const imageBuilder = imageUrlBuilder(client)
export const urlFor = (source:string) => imageBuilder.image(source)
