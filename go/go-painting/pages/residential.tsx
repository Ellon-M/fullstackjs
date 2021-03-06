import React, {FunctionComponent, useState} from 'react'
import Link from 'next/link'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { LoremIpsum } from 'react-lorem-ipsum'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const FloatingWidget = dynamic(() =>  import('../components/floatingwidget'), { ssr: false })
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })
import Footerlinks from '../components/footerlinks';
import Whatsappwidget from '../components/whatsappwidget';
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';
import { Fade, Slide, Bounce, Zoom, AttentionSeeker, JackInTheBox } from "react-awesome-reveal"

import { PrismicRichText } from "@prismicio/react";


interface ResidentialProps {
    whatsappWidget: any,
    residentialDetails: any
}
 
const Residential: FunctionComponent<ResidentialProps> = ({whatsappWidget, residentialDetails}) => {

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
	  	        <label      className="for-dropdown" htmlFor="dropdown"><ArrowDropDownIcon className='dropdown-mui'/>Other Services </label>
  		        <div className="section-dropdown"> 
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
                <Link href='/gypsum'>
	  			<a id="dropdown-links"  href="#">Gypsum Ceilings <ArrowRightIcon/></a>
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
                <h2 className='service-heading'>Residential</h2>
                </AttentionSeeker>
                <AttentionSeeker effect='pulse'>
                <h5 className='service-heading-2'>Painting</h5>
                </AttentionSeeker>
                <div className='inner-service'>
                <div id='paragraph-content'>
                <Fade delay={1200} triggerOnce>
                <p className="service-main-text">
                     {!readMore && <div className="service-main-text-overlay"></div>}
                     <PrismicRichText field={residentialDetails.data['residential-brief-details']}></PrismicRichText>
                {readMore && <p>
                    <PrismicRichText field={residentialDetails.data['residential-more-details']}></PrismicRichText>
                     </p>}
                 </p>
                 </Fade>
                 <a onClick={() => {!readMore ? setReadMore(true) : setReadMore(false)}} 
                 className='read-more-link'>{paragraphLink}</a>
                 </div>
                <div
                    className='service-image-wrap'>
               <Image unoptimized src={residentialDetails.data['residential-image'].url} width={residentialDetails.data['residential-image'].dimensions.width} height={residentialDetails.data['residential-image'].dimensions.height}className='actual-service-image' />
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
    const residentialDetails = await client.getSingle('residential_painting');
  
    return {
        props: {
            whatsappWidget,
            residentialDetails
        }
    }
  }

 
export default Residential;