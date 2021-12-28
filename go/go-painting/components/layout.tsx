import React, { FunctionComponent, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const { Collapse } = require('react-burgers')
const { motion, AnimatePresence } = require('framer-motion')
const { Transition } = require('react-transition-group')
import 'animate.css'

import logo from '../public/gologo2.png'

interface Props {
    
}

const layoutVariants = {
    initial: {
        y: 0,
        scale: 1
    },
    exit: {
        y: -200,
        scale: 0.9,
        transition: {
            ease: 'easeInOut',
            duration: 0.7
        }
    }
}

const slider = {
    initial: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'linear',
            duration: 0.2
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            ease: 'easeOut',
            duration: 0.25
        },
    }
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
   
     

    return ( 
    <motion.div className="nav-wrap" variants={layoutVariants} initial={layoutVariants.initial} exit={layoutVariants.exit} >
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
          <Image src={logo} width={125} height={125} className='actual-logo' />
      </div>
      <div className='nav-logo-larger'>
          <Image src={logo as any} width={160} height={160} className='actual-logo' />
      </div>
      <ul className='nav-links-wrap'>
            <li className='nav-link-list'>
                <Link href='/ourservices'><a className='nav-link'>Our Services</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href='/gallery'><a className='nav-link'>Work Gallery</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Blog</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Shop</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href='/contactus'><a className='nav-link'>Contact us</a></Link>
            </li>
      </ul>

    </nav>
    <AnimatePresence>
    {isActive && 
                <motion.section className='menu-slider' variants={slider} initial={slider.initial} animate={slider.show} exit={slider.exit} layout>
                    <ul className='nav-links-wrap-menu'>
                         <li className='nav-link-list-menu'>
                             <Link href='/ourservices'><a className='nav-link-menu'>Our Services</a></Link>
                         </li>
                         <li className='nav-link-list-menu'>
                            <Link href=''><a className='nav-link-menu'>Work Gallery</a></Link>
                         </li>
                        <li className='nav-link-list-menu'>
                            <Link href=''><a className='nav-link-menu'>Blog</a></Link>
                        </li>
                        <li className='nav-link-list-menu'>
                            <Link href=''><a className='nav-link-menu'>Shop</a></Link>
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