import { newVehicles } from '../GraphQL/Queries';
import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const NewVehicleDetails = () => {
    const {error, loading, data} = useQuery(newVehicles);
    const [newVehicle, setNewVehicle]  = useState([]);
    const [vehicleById, setVehicleById] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (data) {
        setNewVehicle(data);
        console.log(newVehicle);
        }
    },[data])

  

    return ( 
        <div>
          {/* {
              newVehicle.filter((list) => list.id === id)
              .map((list) => (
                  <div key={list.id}>
                      <h3>Brand: {list.brand} </h3>
                      <h4>Model: {list.model} </h4>
                  </div>
              ))
          } */}

        </div>
     );
}
 
export default NewVehicleDetails;