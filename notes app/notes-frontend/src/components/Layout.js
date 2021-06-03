import { AppBar, Avatar, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import { useHistory, useLocation } from "react-router";
import { format } from 'date-fns';
import { purple } from "@material-ui/core/colors";
import { useEffect, useState } from "react";
import axios from "axios";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
             padding: theme.spacing(2),
             display: 'flex',
             alignItems: 'center',
             flexWrap: 'wrap',
        },
        titleText: {
            marginLeft: 30,
            fontWeight: 500
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px )`,
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
            fontWeight: 600
        },
        avatar: {
            marginLeft: theme.spacing(2),
            backgroundColor: purple[500]
        }
    }
});
const Layout = ({ children }) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color="secondary"/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlinedIcon color="secondary"/>,
            path: '/create'
        }

    ]

    const[username, setUsername] = useState(null);

    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      let mounted =true;
      axios({
          method: 'GET',
          url:'http://localhost:5500/api/user/',
          cancelToken: source.token 
      }).then((res) => {
        if (!mounted) return;
          console.log(res);
        setUsername(res.data.username)
    })
    return () => {
        mounted = false;
    };
},[])



    return ( 
        <div className={ classes.root }>
           
            <AppBar className={ classes.appbar } elevation={0}>
                <Toolbar>
                    <Typography className={ classes.date }>
                        { format(new Date(), `do MMMM Y`)}
                    </Typography>
                    <Typography >
                    { username ? <Typography variant="body1">{username}</Typography> :null}
                    </Typography>
                    <Avatar className={classes.avatar}>
                        M
                    </Avatar>
                </Toolbar>
            </AppBar>

            <Drawer className={ classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper}}>
                  <div className ={classes.title }>
                   <NoteOutlinedIcon
                   color="secondary"
                   fontSize="large"/>
                   <Typography variant="h5" className={classes.titleText}>
                        Notes
                       </Typography></div> 

                       <List>
                          {menuItems.map(item => <ListItem button key={item.text}
                          onClick={() => history.push(item.path)}
                          className={location.pathname == item.path ? classes.active: null}>
                          <ListItemIcon>{ item.icon }</ListItemIcon>
                          <ListItemText primary={ item.text }/>
                          </ListItem>)} 
                       </List>
            </Drawer>
       
            <div className={classes.page}>
                <div className={classes.toolbar}></div>{ children }</div>
          
        </div>
     );
}
 
export default Layout ;