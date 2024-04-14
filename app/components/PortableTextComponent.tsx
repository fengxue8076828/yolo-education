import {PortableTextComponents} from '@portabletext/react'
import Link from 'next/link'

const PortableTextComponent:PortableTextComponents = {
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