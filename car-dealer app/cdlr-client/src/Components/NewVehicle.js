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
          if (key === 'brandName') {
            setBrandName(`${value}`);
            setLoading(false);
          }
          else if (key === 'price') {
            setCarPrice(`${value}`);
            setLoading(false);
          }
          else if (key === 'url') {
            setUrl(`${value}`);
            setLoading(false);
          }
        }
      })
    }, [loading])
   
    console.log(data);
    
    
    return (
    <div className="imageGrid">
    { data && data.map(info => {
       return (
        <div className="infoWrap" key={info.key}>
          <img width="250px" height="auto" src={info.url} alt="firebase-image" />
          <h3>
            {info.brandName}
          </h3>
          <p>
            {info.Price}
          </p>
        </div>
       )
      })
    }
    </div> );
}

 
export default NewVehicle;
