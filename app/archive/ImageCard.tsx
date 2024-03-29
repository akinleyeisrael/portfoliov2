import ContentfulImage from '@/lib/contentful-image'
import React from 'react'

interface Prop {
    title: string, url: string
}

export const ImageCard = ({ title, url }: Prop) => {
    return (
        <div>
            <ContentfulImage
                alt={`Cover Image for ${title}`}
                priority
                width={200}
                height={200}
                className={
                    "hover:shadow-medium transition-shadow duration-200 shadow-sm w-1/2 flex flex-col-reverse"
                }
                src={url}
            />
        </div>
    )
}

export default ImageCard