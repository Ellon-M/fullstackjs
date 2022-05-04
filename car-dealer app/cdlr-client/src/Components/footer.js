import { makeStyles, Container} from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles(() => {
    return {
        footerContainer: {
            backgroundColor: 'black',
            height: '25vh',
            width: '100vw',
            bottom: '0',
            // position: 'relative',
            marginTop: '5vh',
            margin: '0',
            borderTop: '1px solid #dbdbdb',
        },
        footer: {
            height: '100%',
            width: '100%',
            bottom: '0',
            margin: '0',
            position: 'relative',
            display: 'flex',
            "@media (max-width: 680px)": {
                display: 'block'
            }
        },
        footerLeft: {
            width: '65vw',
            display: 'block',
            position: 'relative',
            color: 'white',
            margin: '0',
            "@media (max-width: 980px)": {
                width: '50vw',
            },
            "@media (max-width: 680px)": {
                width: '100vw'
            }
        },
        footerLinks: {
            display: 'inline-flex',
            left: '0',
            color: 'transparent',
            margin: '0',
            paddingTop: '3%',
            paddingLeft: '4%',
            "@media (max-width: 980px)": {
                // paddingRight: '.5rem'
            },
            "@media (max-width: 1050px)": {
                paddingTop: '10%',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center'
            }
        },
        footerLinkText: {
            paddingRight: '1.5rem',
            textDecoration: 'none',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: 'lighter',
            fontSize: '1.1rem',
            textDecoration: 'none',
            "@media (max-width: 680px)": {

            }
        },
        footerAcLinkText: {
            color: 'white',
            textDecoration: 'none',
            textTransform: 'uppercase',
            // textAlign: 'center',
            fontWeight: 'lighter',
            fontSize: '1.1rem',
            textDecoration: 'none',
            "@media (max-width: 980px)": {
                fontSize: '.8rem',
                paddingRight: '1rem',
                // width: '2rem'
            },
            "@media (max-width: 680px)": {
                width: '100%'
            }
        },
        footerBelowLinks: {
            marginTop: '40px',
            padding: '.2rem',
            width: '100%',
            margin: '0',
            textAlign: 'center',
            display: 'block',
            position: 'relative',
            // alignItems: 'center',
            // justifyContent: 'center'
        },
        footerGeoInfo: {
            fontStyle: 'italic',
            fontWeight: '400',
            color: '#dbdbdb',
            fontSize: '.92rem',
            marginTop: '-1vh',
            paddingTop: '0',
            textAlign: 'left',
            position: 'relative',
            paddingLeft: '4%',
            "@media (max-width: 680px)": {
                marginTop: '-3vh',
                padding: '.8rem',
                textAlign: 'center',
                paddingLeft: '0'
            }
            
        },
        footerRight: {
            width: '30vw',
            display: 'block',
            position: 'relative',
            margin: '0',
            "@media (max-width: 980px)": {
                width: '50vw',
            },
            "@media (max-width: 680px)": {
                width: '100%'
            }
        },
        footerIcons: {
            padding: '.2rem',
            height: '30%',
            textAlign: 'right',
            paddingTop: '1.2rem',
            height: '4vh',
            display: 'block',
            position: 'relative',
            paddingRight: '6%',
            "@media (max-width: 680px)": {
                textAlign: 'center!important',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                margin: '0',
                width: '100%'
            }
        },
        footerIcon: {
            paddingRight: '1.5rem',
        },
        footerCopyright: {
            padding: '.1rem',
            display: 'block',
            position: 'relative',
            'textAlign': 'right',
            paddingRight: '6%',
            "@media (max-width: 680px)": {
                textAlign: 'center'
            }
        },
        footerCopyrightText: {
            fontStyle: 'italic',
            fontWeight: '400',
            color: '#dbdbdb',
            opacity: '.7',
            fontSize: '.9rem',
            textTransform: 'uppercase',
            padding: '.2rem',
        }

    }
})

const Footer = () => {
    const classes = useStyles();
    return ( 
    <div className={classes.footerContainer}>
    <footer className={classes.footer}>
        <div className={classes.footerLeft}>
            <ul className={classes.footerLinks}>
                <li className={classes.footerLinkText}><Link className={classes.footerAcLinkText} to="">Deals</Link></li>
                <li className={classes.footerLinkText}><Link className={classes.footerAcLinkText} to="">Top</Link></li>
                <li className={classes.footerLinkText}><Link to="" className={classes.footerAcLinkText}>Privacy Policy</Link></li>
                <li className={classes.footerLinkText}><Link className={classes.footerAcLinkText} to="">Contact us</Link></li>
                <li className={classes.footerLinkText}><Link className={classes.footerAcLinkText}to="">About us</Link></li>
            </ul>
            <div className={classes.footerBelowLinks}>
                <p className={classes.footerGeoInfo}>
                    The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise.
                </p>
            </div>
        </div>
        <div className={classes.footerRight}>
         <div className={classes.footerIcons}>
            <span className={classes.footerIcon}>
            <InstagramIcon/>
            </span>
            <span className={classes.footerIcon}>
            <TwitterIcon/>
            </span>
            <span className={classes.footerIcon}>
            <YouTubeIcon/>
            </span>
            <span className={classes.footerIcon}>
            <LinkedInIcon/>
            </span>
            <span className={classes.footerIcon}>
            <GitHubIcon/>
            </span>
         </div>
         <div className={classes.footerCopyright}>
             <p className={classes.footerCopyrightText}>Ellon, Creative, FOSS Developer.</p>
             <p className={classes.footerCopyrightText}>Copyright © 2021 CarDealers</p>
             <p className={classes.footerCopyrightText}>All Rights Reserved.</p>
         </div>
         </div>
    </footer>
    </div> );
}
 
export default Footer;