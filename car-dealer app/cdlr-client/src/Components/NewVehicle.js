import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { newVehicles } from '../GraphQL/Queries';
import  { db }  from '../FB/Firebase';

const NewVehicle = () => {

    const [carPrice, setCarPrice] = useState([]);
    const [brandName, setBrandName] = useState([]);
    const [url, setUrl] = useState([]);
    const [key, setKey] = useState([]);
    const [data, setData] = useState([]);
    
    const ref = db.collection("newVehicle");
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getData.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setData(getData);
      });

     return () => ref();
    }, []);
  
    data.forEach(vehicle => {
     
    })


    

    return ( <div>

    </div> );
}

 
export default NewVehicle;
