import { useEffect, useState } from 'react';
import  { db }  from '../FB/Firebase';

const NewVehicle = () => {
    const [carPrice, setCarPrice] = useState([]);
    const [brandName, setBrandName] = useState([]);
    const [url, setUrl] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const getData = [];
      const ref = db
      .collection("newVehicle")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getData.push({
            ...doc.data(), //spread operator
            key: doc.id, 
          });
        });
        setData(getData);
        setLoading(false);
        //console.log(data);
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
            setLoading(false);
          }
          else if (key === 'url'){
            setUrl(`${value}`);
            setLoading(false);
          }
        }
      })
    }, [loading])
    
    
    return ( <div>
      {brandName}
      {/* <img src={url || "http://via.placeholder.com/100"} alt="firebase-image"/> */}
    </div> );
}

 
export default NewVehicle;
