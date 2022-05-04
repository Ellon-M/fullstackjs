import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import  { db }  from '../FB/Firebase';
import emailjs from 'emailjs-com';
import order from './order';
import firebase from 'firebase';
import { useHistory } from 'react-router';
import { Container } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import { after } from 'underscore';

import Footer from '../Components/footer';
import checkImg from '../images/others/check.png';
import blankCheck from '../images/others/blankcheck.png';



const NewVehicleDetails = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [waiting, setWaiting] = useState(true);
    const [pending, setPending] = useState(true);
    const [details, setDetails] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const { id } = useParams();
    const [signedInUser, setSignedInUser] = useState(false);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           // user.displayName
           // user.email
           // user.photoURL
          return setSignedInUser(true);
        }
         setSignedInUser(false);
      })

      const signOut = () => {
        firebase.auth().signOut();
        history.push('/signedOut');
      }

    useEffect(() => {
        const ref = db
        .collection("newVehicle").get()
        .then((detail) => {
            
          detail.docs.forEach(
                (doc) => {
                    if (doc.id === id) {
                        setDetails(doc.data());
                        setImageUrls(doc.data().url);
                        setTimeout(() => {
                          setPending(false);
                        }, 1000)
                    }
                }
            )
            
        });
        
        setLoading(false);
      }, [loading]);
    
      let accessories = []
      accessories.push(details.accessories)
      console.log(accessories[0]);

      const form = useRef();

      const handleDragStart = (e) => e.preventDefault();

      const style = {
        width: 450,
      }

      const onLoad = after(imageUrls.length, () => {
        setWaiting(false);
      })

      const imgs = [];
      imageUrls.map(path => {
        imgs.push(
        <img src={String(path)} style={style} onDragStart={handleDragStart} onLoad={onLoad} />
        )
      })

      const responsive = {
        0: { items: 1 },
        860: {items: 2},
        1224: { items: 3 },
    };
    

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9ty834f', 'template_vcz77sz', form.current, 'user_oGF8GSFMGTubjg4SICu9n')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

        var orderCheckout = () => {
          if(signedInUser === true) {
            history.push('/vehicles/:id/order');
          }
          else {
          alert('Sign in to proceed with the order');
          }
      }

      const numberWithCommas = (x) => {
        while (x != undefined) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }

      if (signedInUser) {
        return ( 
          <Container className="detailsContainer">
          <div className="imageContainer">
          <AliceCarousel mouseTracking responsive={responsive} controlsStrategy="alternate" paddingRight={0} items={imgs} 
          disableDotsControls/>
          </div>
            <h3 className="detailsMain">
            ⦿  {details.brand} {details.brandDesc}
            </h3>
            <p className="detailsHeading">Specifications</p>
            <div className="detailsColWrap">
            <div className="detailsColMain">
            <section className="detailsCol">
            <div className="detailsMore">
              <div className="detailEach">
                <p className="detailCategory">
                  Color:
                </p>
                <p className="detailValue">
                {details.color}
                </p>
              </div>
              <div className="detailEach">
                <p className="detailCategory">
                  Top Speed:
                </p>
                  <p className="detailValue">
                  {details.topSpeed}
                  </p>
                </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Transmission:
                </p>
                  <p className="detailValue">
                  {details.transmission}
                  </p>
                  </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Mileage:
                </p>
                  <p className="detailValue">
                  {details.mileage}
                  </p>
                  </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Body:
                </p>
                  <p className="detailValue">
                  {details.bodyType}   
                  </p>
                </div>
                </div>
                </section>
                <section className="detailsCol">
                <div className="detailsMore">
                <div className="detailEach">
                <p className="detailCategory">
                  Engine:
                </p>
                  <p className="detailValue">
                  {details.engineSize}   
                  </p>
                </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Fuel:
                </p>
                  <p className="detailValue">
                  {details.fuel}
                  </p>
                  </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Year:
                </p>
                  <p className="detailValue">
                  {details.year}   
                  </p>
                </div>
                </div>
                </section>
                </div>
                <section className="detailsPurchase">
                  <div className="detailsOrigPrice">
                    <h5>Price: </h5>
                    <p className="detailsOrigPriceValue">{numberWithCommas(details.Price)}$</p>
                  </div>
                  <div className="detailsInsurance">
                    <h5>Insurance: </h5>
                    <p className="detailsInsuranceValue">{details.insurance}$</p>
                  </div>
                  <div className="detailsInspection">
                    <h5>Inspection:</h5>
                    <p className="detailsInspectionValue">{details.inspection}$</p>
                  </div>
                  <div className="detailsFreight">
                    <h5>Freight: </h5>
                    <p className="detailsFreightValue">{numberWithCommas(details.freight)}$</p>
                  </div>
                  <div className="detailsFinal">
                    <h5>Total: </h5>
                    <p className="detailsTotalPrice">{numberWithCommas(details.totalPrice)}$</p>
                  </div>
                </section>
                </div>
                <p className="formHeading">Inquire</p>
             <div className="inquireOrder">
             <p className="formHeadingBlock">Inquire</p>
             <div className="formContainer">
                <p className="inquiryDetails">
                Any questions? If you need any clarification, please submit your inquiry. We'd love to hear from you. 
               </p>
             <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email Address" name="email" required/>
                <input type="phone" placeholder="Phone" name="phone"/>
                <textarea cols="30" rows="2" placeholder="Your Message" name="message" required></textarea>
                <br/>
                <input type="submit" className="btnSubmitForm" value="Send Inquiry" required/>
             </form>
             <br/>
             </div>
             
             <div className="orderContainer">
               <div className="detailAccessories">
                 <div className="accessoriesCol">
                 <p>Navigation System <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Navigation System")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                  </span></p>
                  <p>Air Conditioner <span className="accessoriesCheck">
                    {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Air Conditioner")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Alloy Wheels <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Alloy Wheels")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Power Windows <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Power Windows")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Anti-Lock Brake <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Anti-Lock Brake")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Power Steering <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Power Steering")
                     return (
                      <img src={checkImg} alt="✅" />
                     )  
                   })}
                   </span></p>
                 <p>Air Bag <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Air Bag")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Key Less Entry<span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Key Less Entry")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Bluetooth <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Bluetooth")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Front Camera <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Front Camera")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Centralized Door Lock <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Centralized Door Lock")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 </div>
                 <div className="accessoriesCol2">
                 <p>Back Camera <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Back Camera")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Dual Air Bags <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Dual Air Bags")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Fog Lights <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Fog Lights")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Sun Roof <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Sun Roof")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>HID <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "HID")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>LED <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "LED")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Cruise Control <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Cruise Control")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>High Deck <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "High Deck")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Leather Seats <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Leather Seats")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Corner Sensor <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Corner Sensor")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Rear Spoiler <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Rear Spoiler")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 </div>
               </div>
              <p className="orderDetails">
                Satisfied? Proceed with the payment and order now.
              </p>
             <button className="btnOrderForm" onClick = {orderCheckout}> Order Now </button>
             </div>
             </div>
             <div className='detailsFooter'>
               <Footer/>
             </div>
        </Container>
        )
      }

    return ( 
      <>
        <Container className="detailsContainer">
          <div className="imageContainer">
          <AliceCarousel mouseTracking responsive={responsive} controlsStrategy="alternate" paddingRight={0} items={imgs} 
          disableDotsControls/>
          </div>
            <h3 className="detailsMain">
            ⦿  {details.brand} {details.brandDesc}
            </h3>
            <p className="detailsHeading">Specifications</p>
            <div className="detailsColWrap">
            <div className="detailsColMain">
            <section className="detailsCol">
            <div className="detailsMore">
              <div className="detailEach">
                <p className="detailCategory">
                  Color:
                </p>
                <p className="detailValue">
                {details.color}
                </p>
              </div>
              <div className="detailEach">
                <p className="detailCategory">
                  Top Speed:
                </p>
                  <p className="detailValue">
                  {details.topSpeed}
                  </p>
                </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Transmission:
                </p>
                  <p className="detailValue">
                  {details.transmission}
                  </p>
                  </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Mileage:
                </p>
                  <p className="detailValue">
                  {details.mileage}
                  </p>
                  </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Body:
                </p>
                  <p className="detailValue">
                  {details.bodyType}   
                  </p>
                </div>
                </div>
                </section>
                <section className="detailsCol">
                <div className="detailsMore">
                <div className="detailEach">
                <p className="detailCategory">
                  Engine:
                </p>
                  <p className="detailValue">
                  {details.engineSize}   
                  </p>
                </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Fuel:
                </p>
                  <p className="detailValue">
                  {details.fuel}
                  </p>
                  </div>
                <div className="detailEach">
                <p className="detailCategory">
                  Year:
                </p>
                  <p className="detailValue">
                  {details.year}   
                  </p>
                </div>
                </div>
                </section>
                </div>
                <section className="detailsPurchase">
                  <div className="detailsOrigPrice">
                    <h5>Price: </h5>
                    <p className="detailsOrigPriceValue">{numberWithCommas(details.Price)}$</p>
                  </div>
                  <div className="detailsInsurance">
                    <h5>Insurance: </h5>
                    <p className="detailsInsuranceValue">{details.insurance}$</p>
                  </div>
                  <div className="detailsInspection">
                    <h5>Inspection:</h5>
                    <p className="detailsInspectionValue">{details.inspection}$</p>
                  </div>
                  <div className="detailsFreight">
                    <h5>Freight: </h5>
                    <p className="detailsFreightValue">{numberWithCommas(details.freight)}$</p>
                  </div>
                  <div className="detailsFinal">
                    <h5>Total: </h5>
                    <p className="detailsTotalPrice">{numberWithCommas(details.totalPrice)}$</p>
                  </div>
                </section>
                </div>
                <p className="formHeading">Inquire</p>
             <div className="inquireOrder">
             <p className="formHeadingBlock">Inquire</p>
             <div className="formContainer">
                <p className="inquiryDetails">
                Any questions? If you need any clarification, please submit your inquiry. We'd love to hear from you. 
               </p>
             <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email Address" name="email" required/>
                <input type="phone" placeholder="Phone" name="phone"/>
                <textarea cols="30" rows="2" placeholder="Your Message" name="message" required></textarea>
                <br/>
                <input type="submit" className="btnSubmitForm" value="Send Inquiry" required/>
             </form>
             <br/>
             </div>
             
             <div className="orderContainer">
               <div className="detailAccessories">
                 <div className="accessoriesCol">
                 <p>Navigation System <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Navigation System")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                  </span></p>
                  <p>Air Conditioner <span className="accessoriesCheck">
                    {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Air Conditioner")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Alloy Wheels <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Alloy Wheels")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Power Windows <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Power Windows")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Anti-Lock Brake <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Anti-Lock Brake")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Power Steering <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Power Steering")
                     return (
                      <img src={checkImg} alt="✅" />
                     )  
                   })}
                   </span></p>
                 <p>Air Bag <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Air Bag")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Key Less Entry<span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Key Less Entry")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Bluetooth <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Bluetooth")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Front Camera <span className="accessoriesCheck">{details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Front Camera")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Centralized Door Lock <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Centralized Door Lock")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 </div>
                 <div className="accessoriesCol2">
                 <p>Back Camera <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Back Camera")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Dual Air Bags <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Dual Air Bags")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Fog Lights <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Fog Lights")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Sun Roof <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Sun Roof")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>HID <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "HID")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>LED <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "LED")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Cruise Control <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Cruise Control")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>High Deck <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "High Deck")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Leather Seats <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Leather Seats")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Corner Sensor <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Corner Sensor")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 <p>Rear Spoiler <span className="accessoriesCheck">
                   {details.accessories && details.accessories.map(accessory => {
                     if (accessory == "Rear Spoiler")
                     return (
                      <img src={checkImg} alt="✅" />
                     )
                   })}
                   </span></p>
                 </div>
               </div>
              <p className="orderDetails">
                Satisfied? Proceed with the payment and order now.
              </p>
             <button className="btnOrderForm" onClick = {orderCheckout}> Order Now </button>
             </div>
             </div>
             <div className='detailsFooter'>
               <Footer/>
             </div>
        </Container>
        </>
     );
}
 
export default NewVehicleDetails;