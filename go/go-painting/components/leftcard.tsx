// top card in smaller screens

import { FunctionComponent, FC, memo, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'

import bucketIcon from '../public/paint-bucket-icon.png' 
import toIcon from '../public/back1rev.png'

interface LeftCardProps {
    pointOfInterest?: number;
    isOpened?: boolean,
    setIsOpened?: void
}

interface TitleProps {
    title: string
    isOpened: boolean
}

const Title: FC<TitleProps> = ({
    title, 
    isOpened
}) => {
    return (
        <div className='title-wrap'>
            {isOpened ? (
            <span className='card-title-opened'>{title} Services</span>
            ) : (
            <span className='card-title'>{title}</span>
            )}
        </div>
    )
}

const Overlay: FC<LeftCardProps> = ({
    isOpened,
    setIsOpened
}) => (
    <div>

    </div>
)

const dismissDragDistance: number = 100;
 
const LeftCard = memo(({
    pointOfInterest = 0,
}: LeftCardProps) => {

    const [isOpened, setIsOpened] = useState(false);
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isOpened ? 2 : 0);
    const openSpring = { type: "spring", stiffness: 200, damping: 30 };
    const closeSpring = { type: "spring", stiffness: 300, damping: 35 };


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
        onClick={openCard} 
        className={`left-card-container ${isOpened && "open"}`} 
        style={{ zIndex, y }} 
        onUpdate={checkZIndex} 
        drag={isOpened ? "y" : false} 
        onDrag={checkDragToDismiss} 
        dragSnapToOrigin 
        initial={{x: -pointOfInterest, y: 0}} 
        animate={isOpened ? {x: -20, y: -20} : {x: -pointOfInterest, y: 0, transition: {ease: 'easeOut', duration: 0.5}}}
        layout>
            <motion.article className="left-card">
                <Title title='Painting' isOpened={isOpened}/>
                {!isOpened &&
                <Image src={bucketIcon} width={72} height={72} className='left-card-icon'/>
                }
                {!isOpened &&
                <svg xmlns="http://www.w3.org/2000/svg" id="sw-js-blob-svg" viewBox="0 0 100 100" version="1.1" className='blob-left'>
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(37, 137, 255, 1)" offset="0%"/>
                            <stop id="stop2" stop-color="rgba(43, 237, 109, 1)" offset="100%"/>
                        </linearGradient>
                    </defs>
                <path fill="none" d="M21.7,-33.3C28.8,-29.1,35.9,-24.4,39.5,-17.7C43.1,-11,43.3,-2.4,41.6,5.7C40,13.8,36.6,21.3,31.3,26.7C25.9,32,18.6,35.3,10.9,37.7C3.3,40.2,-4.8,41.9,-11.8,39.9C-18.8,38,-24.9,32.4,-30.8,26.3C-36.7,20.2,-42.5,13.6,-44.3,5.9C-46.1,-1.7,-43.9,-10.4,-39.8,-17.7C-35.7,-25.1,-29.8,-31.1,-22.8,-35.4C-15.9,-39.7,-8,-42.3,-0.3,-41.7C7.3,-41.2,14.5,-37.5,21.7,-33.3Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="6" stroke="url(#sw-gradient)"/>
              </svg>
            }
            {isOpened && 
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='left-card-back-icon' onClick={closeCard}>

            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#2589FF" stroke="none">
            <path d="M472 727 c-116 -117 -212 -219 -212 -227 0 -20 421 -440 441 -440 19 0 39 20 39 39 0 9 -87 102 -192 208 l-193 193 193 193 c105 106 192 199 192 208 0 19 -20 39 -40 39 -8 0 -111 -96 -228 -213z"/>
            </g>
            </svg>
            }
            {
             isOpened && 
             <div className='left-card-list-wrap'>
                 <ul className='painting-list'>
                     <Link href='/residential'>
                     <li className='painting-list-item'>
                         Residential painting     
                    </li>
                    </Link>
                    <Link href='/commercial'>
                     <li className='painting-list-item'>
                         Commercial painting
                    </li>
                    </Link>
                    <Link href='/industrial'>
                    <li className='painting-list-item'>
                        Industrial painting
                    </li>
                    </Link>
                 </ul>
                 <ul className='painting-list-icons'>
                    <Link href='/residential'>
                    <li className='painting-list-item-icon'>
                     <Image src={toIcon} width={40} height={40}></Image>     
                    </li>
                    </Link>
                    <Link href='/residential'>
                    <li className='painting-list-item-icon'>
                    <Image src={toIcon} width={40} height={40}></Image>         
                    </li>
                    </Link>
                    <Link href='/residential'>
                    <li className='painting-list-item-icon'>
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
}
);

 
export default memo(LeftCard);