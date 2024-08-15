import {PortableTextComponents} from '@portabletext/react'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/client'

const PortableTextComponent:PortableTextComponents = {
    types: {
      image: ({ value }) => {
        return (
          <img
            src={urlFor(value.asset).url()}
            alt={value.alt || 'Image'}
            style={{ maxWidth: '100%' }}
          />
        )
    },
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <Link className='text-dark-blue underline hover:text-blue' href={value.href} rel={rel} target='_blank'>
            {children}
          </Link>
        )
      },
    },
  }

export default PortableTextComponent