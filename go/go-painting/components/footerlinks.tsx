import React, { FunctionComponent } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

interface FooterlinksProps {
    
}
 
const Footerlinks: FunctionComponent<FooterlinksProps> = () => {
    return ( 
    <>

<footer className="footer-distributed">

  <div className="footer-right">

    <a href="#"><FacebookIcon/></a>
    <a href="#"><InstagramIcon/> </a>
    <a href="#"><EmailIcon/></a>

  </div>

  <div className="footer-left">

    <p className="footer-links">
      <a className="link-1" href="#">Home</a>

      <a href="#">Services</a>

      <a href="#">Inquire</a>
    </p>

    <p className='footer-phone'> <b><PhoneIcon/> + 254 20 2300244 </b></p>
    <p className='footer-location'><LocationOnIcon/> Acacia Drive, Nairobi, Kenya</p>
    <h5 className='footer-company'>Go Painting &copy; 2015</h5>
  </div>
  
</footer>
    </>
     );
}
 
export default Footerlinks;