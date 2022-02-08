import React, { FunctionComponent } from 'react'
import Masonry from 'react-masonry-css'
const { motion } = require('framer-motion')
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { PrismicRichText } from "@prismicio/react";
import { client }  from '../utils/prismichelpers';
import { GetStaticProps, GetServerSideProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { galleryVariants } from '../utils/galleryvariants'
import Footerlinks from '../components/footerlinks';
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })

interface GalleryProps {
    images: any,
}

const Gallery: FunctionComponent<GalleryProps> = ({images}) => {  

    const imgs = images.results;

    const galleryBreakpoints = {
        default: 4,
        980: 3,
        450: 2,
    }
    
    return (
        <>
        <div className='gallery-nav'>
        <Layout/>
        </div>
        <motion.div className="gallery-wrap" variants={galleryVariants} initial={galleryVariants.initial} animate={galleryVariants.animate} exit={galleryVariants.exit}>
        <header id="gallery-top">
            <h2 className='gallery-heading'>Work Gallery</h2>
        </header>

        <Masonry 
        className='my-masonry-grid' columnClassName='my-masonry-grid_column'
        breakpointCols={galleryBreakpoints}>
            { 
            imgs.map((image: any, i: number) => {      
            return (
            <div key={i}className='gallery-image-wrap'>
            <Image unoptimized src={image.data.imageitem.url} width={image.data.imageitem.dimensions.width}  height={image.data.imageitem.dimensions.height} />
            <div className='gallery-tags-wrap'>
            <span className='gallery-tags'>
            <PrismicRichText field={image.data.imagetag}></PrismicRichText>
            </span>
            </div>
            </div>
            )
        })}        
        </Masonry>
        </motion.div> 
        <div>
        <Footerlinks/>
        </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const images = await client.getByType('galleryimage');

    return {
        props: {
            images
        }
    }
}


export default Gallery;