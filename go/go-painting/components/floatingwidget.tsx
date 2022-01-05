import React, {FunctionComponent, useState} from 'react';
import MdAdd from '@material-ui/icons/add';
import MdClose from '@material-ui/icons/clear';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

interface FloatingWidgetProps {
    
}
 
const FloatingWidget: FunctionComponent<FloatingWidgetProps> = () => {
    return ( 
    <>
    <Fab
        mainButtonStyles={{background: "linear-gradient(#2BED6D, #2589FF)"}}
        style={{bottom: 90, right: 10}}
        icon={<MdAdd />}
        // event={event}
        alwaysShowTitle={true}
        >
        <Action
          text="Email"
          // onClick={handleEmailOnClick}
        />
        <Action
          text="Help"
          // onClick={handleHelpOnClick}
         >
        </Action>
        </Fab>
    </> 
    );
}
 
export default FloatingWidget;