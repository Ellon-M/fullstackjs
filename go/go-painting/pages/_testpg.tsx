import React, { FunctionComponent} from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { client } from '../utils/prismichelpers'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import { galleryVariants } from '../utils/galleryvariants'
import Footerlinks from '../components/footerlinks';
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })
import { PrismicRichText } from "@prismicio/react";
import { getPlaiceholder } from 'plaiceholder';

interface TestpgProps {
    items: any,
}
 
const Testpg: FunctionComponent<TestpgProps> = ({items}) => {

    console.log(items.results);
    const its = items.results;

    const galleryBreakpoints = {
        default: 4,
        980: 3,
        450: 2,
    }

    return ( 
    <>
    {/* {its.map((it: any) => {
        return (
         <Image unoptimized src={it.data.imageitem.url} width={it.data.imageitem.dimensions.width}  height={it.data.imageitem.dimensions.height}/>
        )
    })
    } */}
        
    </> );
}
 
export const getStaticProps: GetStaticProps = async () => {
    const items = await client.getByType('galleryimage');

    return {
        props: {
            items
        }
    }
}

export default Testpg;