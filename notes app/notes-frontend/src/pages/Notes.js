import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { spacing } from '@material-ui/system';
import Masonry from 'react-masonry-css';
import { useParams, withRouter } from "react-router";
import axios from 'axios';
function Notes() {

const [notes, setNotes] = useState([]);
const[username, setUsername] = useState(null);

axios.defaults.withCredentials = true;

useEffect(() => {
  axios.get('http://localhost:5500/api/user/').then((res) => {
      console.log(res);
    setUsername(res.data.username)
})
},[])

//(WIth Fetch)
useEffect(() => {
   fetch('http://localhost:5500/api/notes/')
  .then(res => res.json())
  .then(data => setNotes(data))
  }, [])

//(With Axios)

// useEffect(() => {
// axios({
//   method: "GET",
//   withCredentials: true,
//   url: "http://localhost:5500/api/notes/" ,
// }).then(res => res.data)
// .then(data => setNotes(data))

// }, [])
const handleDelete = async (id) => {

    //(With Fetch)

    // await fetch(` http://localhost:5500/api/delete/${id}` , {
    //   method: 'DELETE',
    // })
    //  const newNotes = notes.filter(note => note._id != id)
    //   setNotes(newNotes);
    // }

   //(With Axios)

    await axios({
      method: "DELETE",
      withCredentials: true,   url: ` http://localhost:5500/api/delete/${id}` ,
    })

    const newNotes = notes.filter(note => note._id != id)
      setNotes(newNotes);
  }
  const breakpoints = {
    default: 3,
    1100: 2,
    700:1
  }
  
  return (
    <div>
        <Container>
        <Masonry
       breakpointCols={ breakpoints }
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column">      
         {notes.map(note => (
         < div key={ note._id }>
         <NoteCard note= { note } handleDelete = { handleDelete }/>
          </ div>
       ))}
         </Masonry> 
       </Container>   
    </div>
  )
}

export default withRouter(Notes);
