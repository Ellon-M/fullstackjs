import React, {FunctionComponent} from 'react'
import Masonry from 'react-masonry-css'
const { motion } = require('framer-motion')
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import * as prismic from '@prismicio/client';
import { PrismicRichText } from "@prismicio/react";
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { galleryVariants } from '../utils/galleryvariants'

const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })

interface GalleryProps {
    images: any,
    blurred?: any
}

const Gallery: FunctionComponent<GalleryProps> = ({images, blurred}) => {  

    const blurredURLs = blurred[0];

    const galleryBreakpoints = {
        default: 4,
        980: 3,
        450: 2,
    }
    
    return (
        <>
        <Layout/>
        <motion.div className="gallery-wrap" variants={galleryVariants} initial={galleryVariants.initial} animate={galleryVariants.animate} exit={galleryVariants.exit}>
        <header id="gallery-top">
            <h2 className='gallery-heading'>Work Gallery</h2>
        </header>
        <Masonry 
        className='my-masonry-grid' columnClassName='my-masonry-grid_column'
        breakpointCols={galleryBreakpoints}>
            {images.map((image: any, i: number) => {      
            return (
            <div className='gallery-image-wrap'>
            <Image src={image.data.imageitem.url} width={image.data.imageitem.dimensions.width}  height={image.data.imageitem.dimensions.height} blurDataURL={blurredURLs[i]} placeholder="blur" ></Image>
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
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const images = await client.getAllByType("galleryimage");

    const getTransformedImage: () => Promise<Array<string>> = async () => {
        const blur64Images: Array<string> = [];
        return new Promise(async(resolve) => {
            images.map(async(image: any) => {
                const imageRes: string = await image.data.imageitem.url;
                const blur64: string = (await getPlaiceholder(imageRes)).base64;
                blur64Images.push(blur64);
                resolve(blur64Images);
            })
        })
    }

    const getBlurredImages = async () => {
        const promises: Array<Promise<Array<string>>> = [];

        for (const image of images) {
            promises.push(getTransformedImage());
        }

        const blurredImages = await Promise.all(promises).then(
            (res) => {
                return res;
            }
        )
        return blurredImages;
    }

    const blurred = await getBlurredImages();
    
    return {
        props: {
            images,
            blurred
        }
    }
}


export default Gallery;