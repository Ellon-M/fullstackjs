import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import back from '../public/back1.png'
import back1 from '../public/back1rev.png'
import cancel from '../public/close.png'
import paintingbg from '../public/paintingbg.jpg'
import ceilingsbg from '../public/ceilingsbg.jpg'

interface Props {
    
}
 
const ourServices: FunctionComponent<Props> = () => {
    return ( <div>
        <hr/>
        <header>
            <Link href='/'>
                <Image src={back}></Image>
            </Link>
            <p className='backServices'>back</p>
            <Image src={cancel}></Image>
        </header>
        <section>
            <h4>Our Services</h4>
            <span>
                <h4> </h4>
                <Image src={back1}></Image>
            </span>
            <span>
                <h4> </h4>
                <Image src={back1}></Image>
            </span>
        </section>
        <section>
            <Image src={paintingbg} className='backgroundImgPainting'></Image>
            <h4>Painting</h4>
            <span>
                <h4> Residential Painting </h4>
                <Image src={back1}></Image>
            </span>
            <span>
                <h4> Commercial Painting </h4>
                <Image src={back1}></Image>
            </span>
            <span>
                <h4> Industrial Painting </h4>
                <Image src={back1}></Image>
            </span>
        </section>
        <section>
            <Image src={ceilingsbg} className='backgroundImgDryWall'></Image>
            <h4>Painting</h4>
            <span>
                <h4> Gypsum Ceilings </h4>
                <Image src={back1}></Image>
            </span>
            <span>
                <h4> Wooden Ceilings </h4>
                <Image src={back1}></Image>
            </span>
            <span>
                <h4> Dry Wall </h4>
                <Image src={back1}></Image>
            </span>
        </section>
    </div> );
}
 
export default ourServices;