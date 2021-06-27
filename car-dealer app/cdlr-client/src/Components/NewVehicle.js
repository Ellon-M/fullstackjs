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
    const [loading, setLoading] = useState(true);
    
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
        setLoading(false);
        // console.log(data);
      });

     return () => ref();
    }, [loading]);
  
 
    useEffect(() => {
      data.forEach(vehicle => {
        for (let [key, value] of Object.entries(vehicle)) {
          if (key === 'brandName'){
            setBrandName(`${value}`);
            setLoading(false);
          }
          else if (key === 'price'){
            setCarPrice(`${value}`);
            console.log(`${key}:${value}`);
            setLoading(false);
          }
        }
      })
    }, [loading])
    

    


    

    return ( <div>
      
    </div> );
}

 
export default NewVehicle;
