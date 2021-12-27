import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import back from '../public/back1.png'
import back1 from '../public/back1rev.png'
import ceilingsbg from '../public/ceilingsbg.jpg'
import Leftcard from '../components/leftcard'

interface Props {
    
}
 
const ourServices: FunctionComponent<Props> = () => {
    return ( <div>
        <header className='our-services-top'>
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
        </header>
        <div className='floating-articles'>
            <Leftcard/>
        </div>
       
    </div> );
}
 
export default ourServices;