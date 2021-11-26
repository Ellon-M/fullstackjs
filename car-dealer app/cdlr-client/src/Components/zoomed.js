import { Container, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import zoom1 from '../images/others/zoom2ed.jpg';
import zoom2 from '../images/others/zoom1ed.jpg';


const useStyles = makeStyles((theme) => {
    return {
        zoomedWrap: {
            height: '60vh',
            width: '100%',
            margin: '0',
            padding: '0',
            display: 'inline',
            zIndex: -1,
        },

        leftSide: {
            width: '50%',
            height: '100%',
            float: 'left',
        },
        rightSide: {
            width: '50%',
            height: '100%',
            float: 'right',
        },
        zoomed1: {
            width: '100%',
            height: '100%',
            opacity: '0.8',
            transition: '3s',
            zIndex: -1,
            transformOrigin: 'center center',
            "&:hover": {
             transform: 'scale(1.04)',
            }
        },
        zoomed1Text: {
            position: 'absolute',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginLeft: '300px',
            marginTop: '-280px',
            textAlign: 'center',
            fontSize: '3rem',
        },
        zoomed1SubText: {
            position: 'absolute',
            textAlign: 'center',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginLeft: '-680px',
            marginTop: '370px',
            fontSize: '1.2rem'
        },
        zoomed2: {
            width: '100%',
            height: '100%',
            opacity: '0.8',
            transition: '3s',
            zIndex: -1,
            transformOrigin: 'center center',
            "&:hover": {
            transform: 'scale(1.04)',
            }
        },

        zoomed2subText: {
            position: 'absolute',
            textAlign: 'center',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginLeft: '-880px',
            marginTop: '370px',
            fontSize: '1.2rem'
        }

    }
})

const Zoomed = () => {
    const classes = useStyles();

    return ( 
        <Container className={classes.zoomedWrap}>
            <section className={classes.leftSide}>
            <img className={classes.zoomed1} src={zoom1} alt="" />
            <h2 className={classes.zoomed1Text}>Cruise</h2>
            <h3 className={classes.zoomed1SubText}>See the pick of the bunch with top speed taken into account</h3>
            </section>
            <section className={classes.rightSide}>
            <img className={classes.zoomed2} src={zoom2} alt="" />
            <h2 className={classes.zoomed2Text}></h2>
            <h3 className={classes.zoomed2SubText}></h3>
            </section>
        </Container>
     );
}
 
export default Zoomed;