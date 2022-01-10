import React, { FunctionComponent, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const { Collapse } = require('react-burgers')
const { motion, AnimatePresence } = require('framer-motion')
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import 'animate.css'

import logo from '../public/gologo2.png'
import { layoutVariants } from '../utils/layoutvariants';
import { slider } from '../utils/slidervariants';


interface Props {
    
}

const Layout: FunctionComponent <Props> = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu: () => void = () => {
        if(!isActive){
        setIsActive(true);
        }
        else {
        setIsActive(false);
        }
    }

const targetElement: Element = document.querySelector('body') as HTMLBodyElement;

if (isActive) {
    disableBodyScroll(targetElement);
}
else if (!isActive) {
    enableBodyScroll(targetElement);
}


   
    return ( 
    <motion.div className="nav-wrap" variants={layoutVariants} initial={layoutVariants.initial} animate={layoutVariants.animate} exit={layoutVariants.exit} >
      <nav className='home-navbar'>
      <div className='hamburger-wrap'>
                <a onClick={toggleMenu}>
                <Collapse width={45}
                        lineHeight={1.6}
                        lineSpacing={11}
                        active={isActive}
                        padding = '4px'
                        />
                </a>
      </div>
      <div className='nav-logo'>
      <Link href='/'>
          <Image src={logo} width={100} height={100} className='actual-logo' />
      </Link>
      </div>
      <div className='nav-logo-larger'>
      <Link href='/'>
          <Image src={logo as any} width={160} height={160} className='actual-logo' />
      </Link>
      </div>
      
      <ul className='nav-links-wrap'>
            <li className='nav-link-list'>
                <Link href='/ourservices'><a className='nav-link'>Our Services</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href='/gallery'><a className='nav-link'>Work Gallery</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href='/blog'><a className='nav-link'>Blog</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href='/shop'><a className='nav-link'>Shop</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href='/contactus'><a className='nav-link'>Contact us</a></Link>
            </li>
      </ul>

    </nav>
    <AnimatePresence>
    {isActive && 
                <motion.section id="menu-slider" className='menu-slider' variants={slider} initial={slider.initial} animate={slider.show} exit={slider.exit} layout>
                    <ul className='nav-links-wrap-menu'>
                         <li className='nav-link-list-menu'>
                             <Link href='/ourservices'><a className='nav-link-menu'>Our Services</a></Link>
                         </li>
                         <li className='nav-link-list-menu'>
                            <Link href='/gallery'><a className='nav-link-menu'>Work Gallery</a></Link>
                         </li>
                        <li className='nav-link-list-menu'>
                            <Link href='/blog'><a className='nav-link-menu'>Blog</a></Link>
                        </li>
                        <li className='nav-link-list-menu'>
                            <Link href='/shop'><a className='nav-link-menu'>Shop</a></Link>
                        </li>
                        <li className='nav-link-list-menu'>
                            <Link href='/contactus'><a className='nav-link-menu'>Contact us</a></Link>
                        </li>
                    </ul>
                </motion.section>
                }
                </AnimatePresence>
    </motion.div> );
}
 
export default Layout;