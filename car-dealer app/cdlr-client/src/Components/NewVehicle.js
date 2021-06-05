import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { newVehicles } from '../GraphQL/Queries';

const NewVehicle = () => {

    const {error, loading, data} = useQuery(newVehicles);
    const {newVehicle, setNewVehicle}  = useState(null);
    useEffect(() => {
        if (data) {
        console.log(data);
        }
    },[data])

    return ( <div>
       
    </div> );
}
 
export default NewVehicle;