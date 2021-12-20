import React, { FunctionComponent } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { Fade, Slide } from "react-awesome-reveal";

import landing1 from '../public/golanding1.jpg';
import landing2 from '../public/golanding2.jpg';
import landing3 from '../public/golanding3.jpg';


interface LandingProps {
    
}
 
const Landing: FunctionComponent<LandingProps> = () => {
    return ( 
        <div>
            <Carousel>
                <Fade triggerOnce>
                <div>
                    <Slide triggerOnce>
                    <Image src={landing1}/>
                    </Slide>
                    <Slide triggerOnce>
                    <p className="legend">Legend 1</p>
                    </Slide>
                </div>
                </Fade>
                <div>
                    <Image src={landing2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={landing3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
     );
}
 
export default Landing;