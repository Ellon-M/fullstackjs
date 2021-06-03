import React, { useState } from 'react';
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  field: {
     marginTop: 20,
     marginBottom: 20,
     display:'block'
  }
});


export default function Create() {

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState('todos')

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);


    if (title && details) {
        fetch('http://localhost:5500/api/create/', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({ title, details, category})
        }).then(() => history.push('/'))
    }

    if (title == ''){
      setTitleError(true);
      

    }
    if (details == ''){
      setDetailsError(true);
    }
  }

  return (
    <Container>
      <Typography 
         variant="h6"
        component="h2"
         color="textSecondary">
          Create a New Note
        </Typography>
        <form onSubmit={ handleSubmit } 
          noValidate 
          autoComplete="off">
          <TextField
          onChange = {(e) => setTitle(e.target.value)}
          className={ classes.field }
           label="Note Title"
           variant="outlined"
           color="secondary"
           fullWidth
          error={ titleError }
           required
           />
            <TextField
             onChange = {(e) => setDetails(e.target.value)}
          className={ classes.field }
           label="Note Details"
           variant="outlined"
           color="secondary"
           multiline
           rows={ 4 }
           fullWidth
           error={ detailsError }
           required/>

            <FormControl className={ classes.field }>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={ category } onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="Money" control={<Radio/>} label="Money"/>
            <FormControlLabel value="Todos" control={<Radio/>} label="Todos"/>
            <FormControlLabel value="Reminders" control={<Radio/>} label="Reminders"/>
            <FormControlLabel value="Work" control={<Radio/>} label="Work"/>
            </RadioGroup>
            </FormControl>

            <Button
             type="submit"
             color="secondary"
             variant="contained"
             endIcon={<KeyboardArrowRightOutlinedIcon/>}
             >Submit
            </Button>
        </form>
    </Container>
  )
}
