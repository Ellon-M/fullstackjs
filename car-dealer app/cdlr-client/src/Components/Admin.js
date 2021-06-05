import { useState } from 'react';
import { storage, database } from '../FB/Firebase';
import firebase from '../FB/Firebase';
const AdminPage = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [price, setPrice] = useState(null);
    const [brandName, setBrandName] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              });
          }
        ); 

        const fireStore = firebase.database().ref("/newVehicle")
        let data = {
            url:url ,
            brandName: brandName,
            Price:price,
        };
        fireStore.push(data);
        console.log("success:", data);
    };


    return (  
        <div>
            <h3>Admin here</h3>
            <br/>
            <progress value={progress} max="100" />
            <br />
            <input type="file" onChange={handleChange} />
            <br />
            
             <br />
             <label className="label">Brand/Type:</label>
                <input 
                placeholder="Brand/Type" type="text" value={brandName} onChange={(e)=>{setBrandName(e.target.value)}}
                 />
             <br />
             <br />
             <label className="label">Price:</label>
                <input 
                placeholder="Price" type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}
                 />$
                 <br />
                 <button onClick={handleUpload}>Upload</button>
                 <br /><br />
                 {url}
             {/* <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" /> */}
            </div>
    );
}
 
export default AdminPage;