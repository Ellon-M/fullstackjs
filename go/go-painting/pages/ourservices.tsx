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
       
    </div> );
}
 
export default ourServices;