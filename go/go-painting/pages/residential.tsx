import React, {FunctionComponent} from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { LoremIpsum } from 'react-lorem-ipsum'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const FloatingWidget = dynamic(() =>  import('../components/floatingwidget'), { ssr: false })
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })

import placeholderImg from '../public/servicesplaceholder1.jpg'
import placeholderImg2 from '../public/servicesplaceholder2.jpg'

interface ResidentialProps {
    
}
 
const Residential: FunctionComponent<ResidentialProps> = () => {

   
    return ( 
        <>
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
  			<a id="dropdown-links" href="#">Industrial Painting <ArrowRightIcon/></a>
  			<a id="dropdown-links" href="#">Commercial Painting <ArrowRightIcon/></a>
              <input className="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
		  	<label className="for-dropdown-sub" htmlFor="dropdown-sub">Dry Walls and Ceiling Services <ArrowDropDownIcon className='dropdown2-mui'/> </label>
	  		    <div className="section-dropdown-sub"> 
	  			<a id="dropdown-links"  href="#">Dry Wall <ArrowRightIcon/></a>
	  			<a id="dropdown-links"  href="#">Gypsum Ceilings <ArrowRightIcon/></a>
                <a id="dropdown-links"  href="#">Wooden Ceilings <ArrowRightIcon/></a>
	  		    </div>
  		        </div>
  	            </div>

                </div>
            </aside>

            <article className="service-details">
                <h2 className='service-heading'>Residential</h2>
                <h5 className='service-heading-2'>Painting</h5>
                <div className='inner-service'>
                <p className="service-main-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing fusce commodo pretium suspendisse taciti placerat habitant. Consequat fringilla habitant eget adipiscing dis tempor vitae. Metus inceptos habitant platea a accumsan mauris elementum. Aliquam nunc tempus, porta consectetur arcu a congue. Sociosqu tempus sociosqu a nullam duis arcu luctus. Aliquam amet at ipsum cubilia bibendum tincidunt. Lacus non hac sed fermentum pellentesque imperdiet sapien. Erat metus etiam vulputate fringilla turpis volutpat sapien. Diam commodo conubia praesent eget, dictumst tristique ipsum rutrum.
                Accumsan ornare primis, hendrerit penatibus ullamcorper quis ultricies venenatis. Aliquam viverra mattis quisque nisi lorem. Imperdiet fames condimentum egestas laoreet, nam erat hac mauris. Dis dictum efficitur praesent; posuere rhoncus sem. Dui velit augue porta velit taciti tortor natoque praesent malesuada. Natoque nullam et convallis vehicula facilisis ad.</p>
                <div className='service-image-wrap'>
                <Image src={placeholderImg} className='actual-service-image' />
                </div>
                </div>
            </article>
        </div> 
        </>
    );
}
 
export default Residential;