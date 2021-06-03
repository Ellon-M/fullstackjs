import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'


const useStyles = makeStyles({
     avatar: {
        backgroundColor: (note) => {
             if (note.category == 'Money'){
                  return green[400]
             }
             if (note.category == 'Work'){
               return yellow[500]
             }
            if (note.category == 'Reminders'){
               return pink[400]
             }
               return blue[500]
        }
     }
})

const NoteCard = ({ note, handleDelete }) => {
     const classes = useStyles(note);
    return ( 
        <div>
             <Card elevation={1}>
              <CardHeader
              avatar ={
                   <Avatar className={ classes.avatar }>
                       {note.category[0].toUpperCase()} 
                   </Avatar>
              }
              action={
                    <IconButton onClick={ () => handleDelete(note._id)}>
                   <DeleteOutlineIcon/>
                    </IconButton>
              }  
               title={ note.title }
               subheader={ note.category }/>
               <CardContent>
                   <Typography variant="body2" color="textSecondary">
                        { note.details }
                   </Typography>
               </CardContent>
          </Card>

        </div>
     );
}
 
export default NoteCard;