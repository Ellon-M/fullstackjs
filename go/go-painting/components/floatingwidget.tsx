import React, { FunctionComponent, useState } from 'react';
import MdAdd from '@material-ui/icons/add';
import MdClose from '@material-ui/icons/clear';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email'
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

interface FloatingWidgetProps {
    
}
 
const FloatingWidget: FunctionComponent<FloatingWidgetProps> = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleFab = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
    else if (isOpen) {
      setIsOpen(false);
    }
  }

  // TODO

  const handleEmailOnClick = () => {

  }

  // TODO 

  const handleCallOnClick = () => {

  }
  
    return ( 
    <>
    <Fab
        mainButtonStyles={{background: "linear-gradient(#2BED6D, #2589FF)"}}
        style={{bottom: 90, right: 10}}
        icon={ <MdAdd/> }
        event='click'
        alwaysShowTitle={true}
        // onClick={toggleFab}
        >
        <Action
          text="Email"
          // onClick={handleEmailOnClick}
          style={{background: "linear-gradient(#2BED6D, #2589FF)"}}
        >
          <EmailIcon/>
        </Action>
        <Action
          text="Call"
          style={{background: "linear-gradient(#2BED6D, #2589FF)"}}
          // onClick={handleCallOnClick}
         >
          <CallIcon/>
        </Action>
        </Fab>
    </> 
    );
}
 
export default FloatingWidget;