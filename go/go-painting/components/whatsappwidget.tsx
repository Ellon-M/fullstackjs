import React, {FunctionComponent, useState} from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

interface WhatsappwidgetProps {
    whatsappWidget: any
}
 
const Whatsappwidget: FunctionComponent<WhatsappwidgetProps> = ({whatsappWidget}) => {
    return ( 
    <>
    <FloatingWhatsApp 
         phoneNumber={`+${whatsappWidget.data['whatsapp-number']}`} 
         accountName={whatsappWidget.data['whatsapp-username'][0].text}
         statusMessage={whatsappWidget.data['status-message'][0].text}
         chatMessage={whatsappWidget.data['chat-message'][0].text}
         placeholder={whatsappWidget.data['chat-placeholder'][0].text}
         avatar={whatsappWidget.data['avatar-image'].url}
         notification={whatsappWidget.data['repeated-notification']}
         darkMode={whatsappWidget.data['darkmode']} 
         allowClickAway={true}
         styles={{zIndex: '12'}}/>
    </>
    );
}
 
export default Whatsappwidget;