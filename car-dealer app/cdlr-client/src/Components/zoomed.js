import { Container, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";


import zoom1 from '../images/others/zoomed2dark.png';
import zoom2 from '../images/others/zoomeddark.png';

import zoomIcon1 from '../images/zoom/arrow3.png';


const useStyles = makeStyles((theme) => {
    return {
        zoomedWrap: {
            height: '80vh',
            width: '100vw',
            margin: '0',
            padding: '0',
            zIndex: -1,
            // display: 'block'
            display: 'inline',

            "@media (max-width: 646px)": {
                display: 'block',
            }
        },

        leftSide: {
            width: '50%',
            height: '100%',
            float: 'left',
            overflow: 'hidden'
        },
        rightSide: {
            width: '50%',
            height: '100%',
            overflow: 'hidden'
        },
        zoomed1: {
            width: '100%',
            height: '100%',
            opacity: '0.8',
            transition: '3s',
            zIndex: -1,
            transformOrigin: 'center center',
            "&:hover": {
             transform: 'scale(1.07)',
            }
        },
        zoomed1Text: {
            position: 'absolute',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginLeft: '260px',
            marginTop: '-300px',
            textAlign: 'center',
            fontWeight: '300',
            whiteSpace: 'nowrap',
            fontSize: '4rem',
        },
        zoomed1SubTextWrap: {
            position: 'absolute',
            display: 'inline',
            marginLeft: '-680px',
            marginTop: '270px',
        },
        zoomed2: {
            width: '100%',
            height: '100%',
            opacity: '0.6',
            transition: '3s',
            zIndex: -1,
            transformOrigin: 'center center',
            "&:hover": {
            transform: 'scale(1.07)',
            },
        },
        zoomed2SubTextWrap: {
            position: 'absolute',
            display: 'inline',
            marginLeft: '-550px',
            marginTop: '270px',
        },

        zoomed2subText: {
            position: 'absolute',
            textAlign: 'center',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginLeft: '-880px',
            marginTop: '300px',
            fontSize: '1.2rem',
        },
        zoomedLinks: {
            color: 'white',
            textDecoration: 'none',
        }
    }
})

const Zoomed = () => {
    const classes = useStyles();

    return ( 
        <Container className={classes.zoomedWrap}>
            <section className={classes.leftSide}>
            <Link className={classes.zoomedLinks} to="/speed">
            <img className={classes.zoomed1} src={zoom1} alt="" />
            <h2 className="zoomed1Text">Cruise</h2>
            <div className={classes.zoomed1SubTextWrap}>
            <h3 className="zoomedOneSubText">See the pick of the bunch with top speed taken into account <img className="zoomedIcon" src={zoomIcon1}></img></h3>
            </div>
            </Link>
            </section>

            <section className={classes.rightSide}>
            <Link to="/mileage">
            <img className={classes.zoomed2} src={zoom2} alt="" />
            </Link>
            <Link className={classes.zoomedLinks} to="/mileage">
            <h2 className="zoomed2Text"> &lt;Mileage </h2>
            <div className={classes.zoomed2SubTextWrap}>
            <h3 className="zoomedTwoSubText">If less periodic service is just what you need <img className="zoomedIcon" src={zoomIcon1}></img></h3>
            </div>
            </Link>
            </section>
        </Container>
     );
}
 
export default Zoomed;