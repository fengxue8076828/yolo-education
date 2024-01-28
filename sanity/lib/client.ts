import { createClient } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2024-01-05",
  dataset,
  projectId,
  useCdn:true,
  token:"skVikxp1Og5y1PZq7e3Sq7bkQqVuDFsyrnOQkScKO4RvnrkU5wbsh1W2gHY91sDQw3yzdUCvzyOBTyLFwgsRZs0Kl4AOZx78SKcJiUaA1Chw1qRcIBr23YqdlRPrHb3ZOgxE1bH7Dmtft21bUdJdgzhDb8c4ss5Y8sIoGafyku0PLdCxcLfl"
})

const imageBuilder = imageUrlBuilder(client)
export const urlFor = (source:string) => imageBuilder.image(source)
