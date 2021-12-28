import React, {FunctionComponent, memo, useState, FC} from 'react'
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'

import toIcon from '../public/back1rev.png'
import rightIcon from '../public/rightIcon.png'

interface RightcardProps {
    pointOfInterest?: number;
    isOpened?: boolean,
    setIsOpened?: void
}

interface RightTitleProps {
    title: string
    isOpened: boolean
}


const RightTitle: FC<RightTitleProps> = ({
    title, 
    isOpened
}) => {
    return (
        <div className='right-title-wrap'>
            {isOpened ? (
            <span className='right-card-title-opened'>{title} Services</span>
            ) : (
            <span className='right-card-title'>{title}</span>
            )}
        </div>
    )
}

const Overlay: FC<RightcardProps> = ({
    isOpened,
    setIsOpened
}) => (
    <div>

    </div>
)

const dismissDragDistance: number = 100;
 
const Rightcard = memo(({
    pointOfInterest = 0,
}: RightcardProps) => {

    const [isOpened, setIsOpened] = useState(false);
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isOpened ? 3 : 0);

    const openCard = () => {
        if (!isOpened && y.get() === 0) {
        setIsOpened(true);
        }
    }

    const closeCard = () => {
        if (isOpened) {
        setIsOpened(false);
        }
    }

    // TODO
    const checkTapToDismiss = () => {

    }

    const checkDragToDismiss = () => {
        if (y.get() > dismissDragDistance) {
            setIsOpened(false);
        }
    }

    const checkZIndex = () => {
        if (isOpened) {
            zIndex.set(2);
          } else if (!isOpened) {
            zIndex.set(0);
          }
    }

    return ( 
        <div className='card-item'>
            <AnimatePresence>
            <Overlay isOpened={isOpened}/>
            <motion.div 
            className={`right-card-container ${isOpened && "open"}`} 
            style={{ zIndex, y }} 
            onUpdate={checkZIndex} 
            drag={isOpened ? "y" : false} 
            onDrag={checkDragToDismiss} 
            dragSnapToOrigin 
            initial={{x: pointOfInterest, y: 0}} 
            animate={isOpened ? {x: -470, y: -20, transition: {ease: 'easeIn', duration: 0.2}} : {x: pointOfInterest, y: 0, transition: {ease: 'easeOut', duration: 0.5}}}
            onClick={openCard} 
            layout>
            <motion.article className="right-card">
                <RightTitle title='Dry Wall & Ceilings' isOpened={isOpened}/>
                {!isOpened &&
                <Image src={rightIcon} width={72} height={72} className='right-card-icon'/>
                }
                {!isOpened &&
                    <svg xmlns="http://www.w3.org/2000/svg" id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1" className='blob-right'>
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(43, 237, 109, 1)" offset="0%"/>
                            <stop id="stop2" stop-color="rgba(37, 137, 255, 1)" offset="100%"/>
                        </linearGradient>
                    </defs>
                        <path fill="url(#sw-gradient)" d="M26.9,-31C33.2,-26.8,35.5,-16.7,34.9,-7.9C34.3,0.8,30.9,8.3,27.2,16.7C23.6,25.1,19.7,34.3,13.1,37.1C6.5,40,-2.7,36.5,-12.2,33.2C-21.6,29.9,-31.1,26.7,-34.7,20.2C-38.2,13.7,-35.8,3.9,-31.8,-3.3C-27.8,-10.5,-22.1,-15.1,-16.6,-19.5C-11,-23.9,-5.5,-28.1,2.4,-30.9C10.3,-33.8,20.6,-35.3,26.9,-31Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"/>
                    </svg>
                }
                {isOpened && 
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='right-card-back-icon' onClick={closeCard}>

                <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#2589FF" stroke="none">
                <path d="M472 727 c-116 -117 -212 -219 -212 -227 0 -20 421 -440 441 -440 19 0 39 20 39 39 0 9 -87 102 -192 208 l-193 193 193 193 c105 106 192 199 192 208 0 19 -20 39 -40 39 -8 0 -111 -96 -228 -213z"/>
                </g>
                </svg>
                }
            {
             isOpened && 
             <div className='right-card-list-wrap'>
                 <ul className='ceilings-list'>
                     <Link href='/residential'>
                     <li className='ceilings-list-item'>
                         Gypsum Ceilings     
                    </li>
                    </Link>
                    <Link href='/commercial'>
                     <li className='ceilings-list-item'>
                         Wooden ceilings
                    </li>
                    </Link>
                    <Link href='/industrial'>
                    <li className='ceilings-list-item'>
                        Dry Wall
                    </li>
                    </Link>
                 </ul>
                 <ul className='ceilings-list-icons'>
                    <Link href='/gypsum'>
                    <li className='ceilings-list-item-icon'>
                     <Image src={toIcon} width={40} height={40}></Image>     
                    </li>
                    </Link>
                    <Link href='/wooden'>
                    <li className='ceilings-list-item-icon'>
                    <Image src={toIcon} width={40} height={40}></Image>         
                    </li>
                    </Link>
                    <Link href='/drywall'>
                    <li className='ceilings-list-item-icon'>
                    <Image src={toIcon} width={40} height={40}></Image>          
                    </li>
                    </Link>
                </ul>
             </div>
            }
            </motion.article>
        </motion.div>
    </AnimatePresence>
        </div> 
    );
})
 
export default memo(Rightcard);