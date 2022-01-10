import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import Image from 'next/image'
const { motion } = require('framer-motion')

import Leftcard from '../components/leftcard'
import Rightcard from '../components/rightcard'
import { servicesVariants } from '../utils/servicesvariants'
import goLogo from '../public/gologo2.png';

interface Props {
    
}

 
const ourServices: FunctionComponent<Props> = () => {
    return ( 
    <motion.div variants={servicesVariants} initial={servicesVariants.initial} animate={servicesVariants.animate} exit={servicesVariants.exit} className="services-wrapper">
        <motion.header className='our-services-top' variants={servicesVariants}>
            <Link href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='our-services-top-icon'>

                <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M472 727 c-116 -117 -212 -219 -212 -227 0 -20 421 -440 441 -440 19 0 39 20 39 39 0 9 -87 102 -192 208 l-193 193 193 193 c105 106 192 199 192 208 0 19 -20 39 -40 39 -8 0 -111 -96 -228 -213z"/>
                </g>
            </svg>
            </Link>
            <Link href='/'>
            <p className='our-services-top-text'>back</p>
            </Link>
            <div className='services-logo'>
                <Image src={goLogo} width={120} height={120}></Image>
            </div>
        </motion.header>
        <motion.div className='articles' variants={servicesVariants}>
        <div className='floating-article-left'>
            <Leftcard/>
        </div>
        <div className='floating-article-right'>
            <Rightcard/>
        </div>
        </motion.div>
    </motion.div> );
}
 
export default ourServices;