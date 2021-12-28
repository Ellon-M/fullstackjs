import React, {FunctionComponent} from 'react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'

import {ImageData} from '../utils/imagedata';

import l from '../public/golanding1wider.jpg'

interface GalleryProps {
    
}


const GalleryImage: FunctionComponent = () => {
    return (
        <div className='image-gallery-wrap'>
            
        </div>
    )
}
 
const Gallery: FunctionComponent<GalleryProps> = () => {
    return ( 
    <>
    <Masonry 
    className='my-masonry-grid' columnClassName='my-masonry-grid_column'
    breakpointCols={3}>
        {ImageData.map(image => (
                        <Image src={image.src} key={image.id}>
                        </Image>
         ))}
    </Masonry>
    </> 
    );
}
 
export default Gallery;