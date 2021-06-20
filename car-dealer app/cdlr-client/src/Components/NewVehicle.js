import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { newVehicles } from '../GraphQL/Queries';
import firebase from '../FB/Firebase';
import database from '../FB/Firebase';

const NewVehicle = () => {

    // const {error, loading, data} = useQuery(newVehicles);
    // const {newVehicle, setNewVehicle}  = useState(null);
    // useEffect(() => {
    //     if (data) {
    //     console.log(data);
    //     }
    // },[data])

    const [price, setPrice] = useState([]);
    const [brandName, setBrandName] = useState([]);
    const [url, setUrl] = useState([]);
    const [key, setKey] = useState([]);
    const [data, setData] = useState(null);
    


    const ref = firebase.database().ref("/newVehicle");

    useEffect(() => {
        ref.orderByKey().on('value', (snapshot) => {
            const vehicle = snapshot.val();
            // setBrandName(prevState => [...prevState, vehicle.brandName]);
            // setPrice(prevState => [...prevState, vehicle.Price]);
            // setUrl(prevState => [...prevState, vehicle.url]);
            // setKey(prevState => [...prevState, snapshot.key])
            // console.log(snapshot.val());
            setData(vehicle);
          }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          });
    }, []);

    // console.log(brandName);
    // console.log(price);
    // console.log(key);
    console.log(data);
    return ( <div>
      {/* {brandName.map(brand => (
        <div>{brand}</div>
      ))}
           {price.map(price => (
        <div>{price}</div> */}

    </div> );
}

 
export default NewVehicle;