import { Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import bgimg from '../images/bgimg9.jpg'
import bgimg2 from '../images/bgimg6.jpg'
import bgimg3 from '../images/bgimg8.jpg'
import twitterImg from '../images/twitter.png'
import instagramImg from '../images/instagram.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import { useContext, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthContext } from '../components/AppContext';

const useStyles = makeStyles((theme) => { return { 
    img: {
         width: '100%',
         height: '80vh',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
     },
     carousel: {
        showThumbs: false,
        showArrows: false
     },
     text: {
        position: 'absolute',
        textAlign: 'center',
        justifyContent:'center',
        bottom: '60%',
        zIndex: '20',
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
           left: '4%',
           right: '10%'
        },
        [theme.breakpoints.between('sm','md')]: {
            right: '25%',
            left: '20%'
         },
         [theme.breakpoints.between('md','lg')]: {
            right: '25%',
            left: '25%',
         }
     },
     subtext: {
        position: 'absolute',
        justifyContent:'center',
        bottom: '40%',
        zIndex: '20',
        [theme.breakpoints.down('sm')]: {
            left: '4%',
            right: '10%',
            marginTop: 30
         },
         [theme.breakpoints.between('sm','md')]: {
             right: '25%',
             left: '20%',
             bottom: '30%' 
          },
          [theme.breakpoints.between('md','lg')]: {
             right: '25%',
             left: '25%',
             bottom:'35%'
          }
     },
     largeSubText: {
             position: 'absolute',
             justifyContent:'center',
             bottom: '40%',
             zIndex: '20',
      [theme.breakpoints.down('sm')]: {
             left: '4%',
             right: '10%',
            //  marginTop: 40
       },
       [theme.breakpoints.between('sm','md')]: {
         right: '25%',
         left: '20%',
         bottom: '35%' 
      },
      [theme.breakpoints.between('md','lg')]: {
         right: '25%',
         left: '25%',
         bottom:'35%'
      }
     },
     title: {
        marginBottom: 30,
        marginTop: 20,
        textAlign: 'center',
        justifyContent:'center',

     },
     accountIcon: {
        marginTop: 50,
        textAlign: 'center',
        justifyContent:'center',

     },
     form: {
         textAlign: 'center',
         justifyContent: 'center',
     },
     formContainer: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
  },
     field: {
         width: 300,
         marginBottom: 30,
     },
     button: {
         width:300,
         marginTop: 20,
         marginBottom:100
     },
     footer: {
        background: '#eeeeee',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 30
     },
     icons:{
        marginBottom: 10,
     },
     ig: {
        marginLeft: 5
     }
}
});


const Login = () => {

   const classes = useStyles();
   const history = useHistory();
   const [username,setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(false);
   const [errorText, setErrorText] =useState(false);
   const [isPending, setIsPending] = useState(false);
   const authentication = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      setError(false);
      setIsPending(true);

      axios({
         method: "POST",
         data: {
            username: username,
            password: password
         },
         withCredentials:true,
         url: "http://localhost:5500/api/login/",
      }).then((res) => {
            console.log(res.data);
            if (res.data.err) {
             setError(true);
             setErrorText(res.data.err);
             setIsPending(false);
            }
            else if(res.data.status) {
               console.log(res.data);
               authentication.onAuth();
               const redirect = () => {
                setIsPending(false);
                 history.push('/');
               };
                setTimeout(redirect, 1000);
            }
      }
      ).catch( err => {
         if (err.name === 'AbortError') {
             console.log('Fetch aborted')
            }
            else {
            console.log(err.message);
            }
         }) 
      }
    return ( 
    <div className={ classes.carouselWrap }>
            <Carousel infiniteLoop 
            autoPlay useKeyboardArrows  dynamicHeight interval="80000" transitionTime="800" 
            showArrows={false}
            showIndicators={false}
            showThumbs={false} 
            showStatus={false}
            stopOnHover={false}
            >
                <div>
                    <img src={bgimg} className={ classes.img } />
                    <Typography 
                         variant="h3"
                         className={ classes.text }> "Your Schedule, Organised"
                     </Typography>
                      <Typography 
                         variant="h4"
                         className={ classes.subtext }>
            Find all your notes exactly where you left them
                       </Typography>
                </div>
                <div>
                    <img src={bgimg2} className={ classes.img }/>
                    <Typography 
            variant="h2"
            className={ classes.text }> "Simple Navigation"
            </Typography> <Typography 
            variant="h4"
            className={ classes.subtext }>
            Add notes to your dashboard with just a click!</Typography>
                </div>
                <div>
                    <img src={bgimg3} className={ classes.img } />
                    <Typography 
            variant="h2"
            className={ classes.text }> "Prioritise your World"
            </Typography> <Typography 
            variant="h4"
            className={ classes.largeSubText }> Add various categories to your notes, and highlight them with important
            </Typography>
                </div>
            </Carousel>
            <div className={ classes.loginWrap }>
            <div className={classes.accountIcon}>
            <AccountBoxOutlinedIcon fontSize="large" color="secondary"/>
            </div>
            <Typography
                    className={ classes.title }
                    variant="h5"
                    component="h6"
                    >
                    Log in to continue
               </Typography>
               <div className={ classes.formContainer }>
                  <form classname={ classes.form }
                        onSubmit={ handleSubmit }
                        autoComplete="off">
                           <div className="fieldContainer">
                     <TextField
                         onChange={(e) => setUsername(e.target.value)}
                         value={ username }
                         className={ classes.field }
                         label="username"
                         color="secondary"
                         size="small"
                         variant="outlined"
                         error = { error }
                         required
                         />
                         </div>
                         <div className="fieldContainer">
                          <TextField
                         onChange={(e) => setPassword(e.target.value)}
                         value={ password }
                         className={ classes.field }
                         label="password"
                         type="password"
                         color="secondary"
                         size="small"
                         variant="outlined"
                         error = { error }
                         helperText = { errorText }
                         required
                         />
                         </div>
                         {!isPending && <Button
                           className={ classes.button }
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large">
                                LOG IN
                            </Button>}
                            {isPending && <Button
                           className={ classes.button }
                            type="submit"
                            variant="contained"
                            disabled
                            color="secondary"
                            size="large">
                                LOGGING YOU IN..
                            </Button>}
                  </form>
               </div>
             </div>
             <footer className={ classes.footer }>
                  <Container>
                  <div className={ classes.icons }>
                     <a href="http://twitter.com">
                        <img src= {twitterImg} width="30" height="auto"/>
                     </a>
                     <a href="http://instagram.com">
                        <img className={classes.ig} src= {instagramImg} width="30" height="auto"/>
                     </a>
                     </div>
                     <Typography 
                variant="overline">
                  <CopyrightOutlinedIcon
                  style={{ fontSize: 11 }}/> ELLON 2021
                  </Typography>
                  </Container>
             </footer>
        </div>
       
     );
}
 
export default Login;