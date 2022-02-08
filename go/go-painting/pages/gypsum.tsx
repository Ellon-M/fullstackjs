import React, {FunctionComponent, useState} from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })
const FloatingWidget = dynamic(() =>  import('../components/floatingwidget'), { ssr: false })
import Footerlinks from '../components/footerlinks';
import Whatsappwidget from '../components/whatsappwidget';
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';
import { Fade, Slide, Bounce, Zoom, AttentionSeeker, JackInTheBox } from "react-awesome-reveal"
import { PrismicRichText } from "@prismicio/react";


interface GypsumProps {
    whatsappWidget: any,
    gypsumDetails: any
}
 
const Gypsum: FunctionComponent<GypsumProps> = ({whatsappWidget, gypsumDetails}) => {

    const [readMore, setReadMore] = useState(false);
    const paragraphLink = !readMore ? "Read More ↘": "Read less ↖";

    return ( 
        <div className='service-wrap'>
        <div className='service-layout'>
        <Layout/>
    </div>
    <div className='painting-services-wrap'>
        <aside className='side-links'>
            <div className='side-content'>
            <div className="sec-center"> 	
            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
              <label className="for-dropdown" htmlFor="dropdown"><ArrowDropDownIcon className='dropdown-mui'/>Other Services </label>
              <div className="section-dropdown">
              <Link href='/residential'>
              <a id="dropdown-links"  href="#">Residential Painting <ArrowRightIcon/></a>
            </Link> 
            <Link href='/industrial'>
              <a id="dropdown-links" href="#">Industrial Painting <ArrowRightIcon/></a>
            </Link>
            <Link href='/commercial'>
              <a id="dropdown-links" href="#">Commercial Painting <ArrowRightIcon/></a>
            </Link>
            <input className="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
            <label className="for-dropdown-sub" htmlFor="dropdown-sub">Dry Walls and Ceiling Services <ArrowDropDownIcon className='dropdown2-mui'/> </label>
              <div className="section-dropdown-sub"> 
            <Link href='/drywall'>
              <a id="dropdown-links"  href="#">Dry Wall <ArrowRightIcon/></a>
            </Link>
            <Link href='/wooden'>
            <a id="dropdown-links"  href="#">Wooden Ceilings <ArrowRightIcon/></a>
            </Link>
              </div>
              </div>
              </div>
            </div>
        </aside>

        <article className="service-details">
            <AttentionSeeker effect='pulse' duration={600}>
            <h2 className='service-heading'>Gypsum</h2>
            </AttentionSeeker>
            <AttentionSeeker effect='pulse'>
            <h5 className='service-heading-2'>Ceilings</h5>
            </AttentionSeeker>
            <div className='inner-service'>
            <div id='paragraph-content'>
            <Fade delay={1200} triggerOnce>
            <p className="service-main-text">
                 {!readMore && <div className="service-main-text-overlay"></div>}
            <PrismicRichText field={gypsumDetails.data['gypsum-brief-details']}></PrismicRichText>
            {readMore && <p>
                <PrismicRichText field={gypsumDetails.data['gypsum-more-details']}></PrismicRichText>
                 </p>}
             </p>
             </Fade>
             <a onClick={() => {!readMore ? setReadMore(true) : setReadMore(false)}} 
             className='read-more-link'>{paragraphLink}</a>
             </div>
            <div
                className='service-image-wrap'>
            <Image unoptimized src={gypsumDetails.data['gypsum-image'].url} width={gypsumDetails.data['gypsum-image'].dimensions.width} height={gypsumDetails.data['gypsum-image'].dimensions.height}className='actual-service-image' />
            </div>
            </div>
        </article>
        <div 
        className='footer-services'>
        <Footerlinks/>
        </div>
    </div> 
    <FloatingWidget/>
    <Whatsappwidget whatsappWidget={whatsappWidget}/>
    </div>
     );
}

export const getStaticProps: GetStaticProps = async () => {
    const whatsappWidget = await client.getSingle('whatsapp_widget');
    const gypsumDetails = await client.getSingle('gypsum_ceilings');
  
    return {
        props: {
            whatsappWidget,
            gypsumDetails
        }
    }
  }
 
export default Gypsum;