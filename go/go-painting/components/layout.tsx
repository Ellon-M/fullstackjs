import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/gologo2.png'

interface Props {
    
}
 
const Layout: FunctionComponent <Props> = () => {
    return ( 
    <div>
      <nav className='home-navbar'>
          <div className='nav-logo'>
          <Image src={logo} width={140} height={140} />
          </div>
        <ul className='nav-links-wrap'>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Our Services</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Work Gallery</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Blog</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Shop</a></Link>
            </li>
            <li className='nav-link-list'>
                <Link href=''><a className='nav-link'>Contact us</a></Link>
            </li>
      </ul>

    </nav>
    </div> );
}
 
export default Layout;