import { Button, ButtonGroup, Container, Drawer, fade, Fade, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography, withStyles } from '@material-ui/core';
import bgimg from '../images/bgimg7.jpg'
import { useState } from 'react';
import { useHistory } from 'react-router';

const drawerWidth = 500
const useStyles = makeStyles((theme) => {
     return {
         img: { 
            width: `calc(100% - ${drawerWidth}px )`,
            height: '100vh',
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxSizing: 'border-box',
            position: 'absolute',

            [theme.breakpoints.down('sm')]: {
               display: 'none'  
            }
         },
         title: {
            marginBottom: 30, 
         },
        field: {
             width: 300,
             marginBottom: 20,
             textDecoration: 'none'
         },
         button: {
            width: 300,
            marginTop: 20
         },
         drawer: {
             maxHeight:'100vh',
             alignItems: 'center',
             justifyContent: 'center',
             textAlign: 'center',
             width: drawerWidth,
        //      [theme.breakpoints.down('sm')]: {
        //         width: 'innerWidth'
               
        //    }
          },
        fieldsContainer: {
             width: drawerWidth,
             [theme.breakpoints.down('sm')]: {
                width: '100vw'
            }
        },
    top: {
      marginTop: 200,
    }
}
});

const SignUp = () => {

    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mailError, setMailError] = useState(false);
    const [mailErrorText, setMailErrorText] = useState(false);
    const [userError, setUserError] = useState(false);
    const [userErrorText, setUserErrorText] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMailError(false);
        setUserError(false);
        setUserErrorText(false);
        setError(false);
        setErrorText(false);
        setIsPending(true);

        fetch('http://localhost:5500/api/register/', {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin": "*",
                     "Content-type": "application/json"},
            body: JSON.stringify( {email, username, password, confirmPassword})
        }).then(
            res => {
                if(!res.ok) {
                    throw Error('Could not fetch data')
                }
                return res.json();
            }
           ).then(
            data  => {
                for(let [key, value] of Object.entries(data)) {
                    if(key === 'mailError'){
                        console.log(`${key}: ${value}`);
                        return fetch('http://localhost:5500/api/register/')
                       .then(
                           mailError => {
                               if (Object.entries(mailError)) {
                                  setMailError(true);
                                  setMailErrorText(`${value}`);
                                  setIsPending(false);
                               }
                           })
                     }
                    else if(key === 'UserError'){
                       console.log(`${key}: ${value}`);
                       return fetch('http://localhost:5500/api/register/')
                      .then(
                          userError => {
                              if (Object.entries(userError)) {
                                 setUserError(true);
                                 setUserErrorText(`${value}`);
                                 setIsPending(false);
                              }
                          })
                    }
                    else if (key === 'error'){
                      console.log(`${key}: ${value}`);
                      return fetch('http://localhost:5500/api/register/')
                      .then(
                          error =>  {
                              if (Object.entries(error)) {
                                 setError(true);
                                 setErrorText(`${value}`);
                                 setIsPending(false);
                              }
                          })
                   }
                   else if (key === 'success') {
                    console.log(`${key}: ${value}`);
                    setIsPending(false);
                    history.push('/login');
                 }
                }
            })
            .catch( err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted')
                   }
                   else {
                   console.log(err.message);
                   }
                }) 
        
    }

    return ( 
        <div className={ classes.background }>
        <img src={bgimg} className={ classes.img } />
        <div className={ classes.formContainer }>
           <Drawer className={ classes.drawer }
                    variant="permanent"
                    anchor="right"
                    >
                   <Container className={ classes.top }></Container> 
                   <div className={classes.formContainer}>
               <Typography
                    className={ classes.title }
                    variant="h5"
                    component="h6"
                    >
                    Sign up to continue
               </Typography>
               <form
               className={ classes.form } onSubmit={ handleSubmit }
                     autoComplete="off">   
                     <div className={ classes.fieldsContainer }>
                         <TextField
                          onChange={(e) => setEmail(e.target.value)}
                          value={ email }
                          className={ classes.field }
                          size="small"
                          label="email address"
                          variant="outlined"
                          color="secondary"
                          error = { mailError } 
                          helperText={ mailErrorText }
                          required 
                          />
                          </div>
                          <div className={ classes.fieldsContainer }>
                          <TextField 
                           onChange={(e) => setUsername(e.target.value)}
                           value={ username }
                           className={ classes.field }
                           label="username"
                           size="small"
                           variant="outlined"
                           color="secondary"
                           error = { userError }
                           helperText={ userErrorText }
                           required
                           />
                           </div>
                           <div className={ classes.fieldsContainer }>
                           <TextField
                           onChange={(e) => setPassword(e.target.value)}
                           value={ password }
                           className={ classes.field }
                           size="small"
                           label="password"
                           type="password"
                           autoComplete="current-password"
                           variant="outlined"
                           color="secondary"
                           error= { error }
                           helperText={ errorText }
                           required
                           />
                           </div>
                           <div className={ classes.fieldsContainer }>
                           <TextField
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={ confirmPassword }
                            className={ classes.field }
                            size="small"
                            label="confirm password"
                            variant="outlined"
                            color="secondary"
                            error = { error }
                            required
                            />
                            </div>
                           {!isPending && <Button
                           className={ classes.button }
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="large">
                                SIGN UP
                            </Button>}
                            {isPending && <Button
                           className={ classes.button }
                            type="submit"
                            variant="contained"
                            disabled
                            color="secondary"
                            size="large">
                                SIGNING UP..
                            </Button>}
               </form>
               </div>
           </Drawer>
           </div>
           </div>
     );
}
 
export default SignUp;