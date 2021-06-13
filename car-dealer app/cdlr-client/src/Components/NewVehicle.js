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

    const [price, setPrice] = useState(null);
    const [brandName, setBrandName] = useState(null);
    const [url, setUrl] = useState([]);
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        const ref = firebase.database().ref("/newVehicle");

        ref.on('value', (snapshot) => {
            console.log(snapshot.val());
          }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          }); 

    }, [])

    return ( <div>
       
    </div> );
}
 
export default NewVehicle;