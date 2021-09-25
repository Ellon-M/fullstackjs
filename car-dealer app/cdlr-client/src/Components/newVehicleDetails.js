import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  { db }  from '../FB/Firebase';

const NewVehicleDetails = () => {

    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const { id } = useParams();
 
    useEffect(() => {
        const ref = db
        .collection("newVehicle").get()
        .then((detail) => {
            
            const details = detail.docs.forEach(
                (doc) => {
                    if (doc.id === id) {
                        setDetails(doc.data());
                        setImageUrls(doc.data().url);
                        setLoading(false);
                    }
                }
            )
            
        });
        setLoading(false);
      }, [loading]);



    return ( 
        <div>
             {imageUrls && imageUrls.map(path => {
             return (  
                 <img className="detailImgs" width="250px" height="auto" src={path} alt="firebase-img" />
             )
             })}
             <p>
             {details.brandDesc} 
             </p>
             <p>
             {details.color}
             </p>
             <p>
             {details.topSpeed}
             </p>
             <p>
             {details.transmission}
             </p>
             <p>
             {details.fuel}
             </p>
             <p>
             {details.year}   
             </p>
        </div>
     );
}
 
export default NewVehicleDetails;