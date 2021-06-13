import { useEffect, useState } from 'react';
import { storage, database } from '../FB/Firebase';
import firebase from '../FB/Firebase';
const AdminPage = () => {
    const [files, setFiles] = useState([]);
    const [url, setUrl] = useState([]);
    const [progress, setProgress] = useState(0);
    const [price, setPrice] = useState(null);
    const [brandName, setBrandName] = useState(null);

    const handleChange = (e) => {
      for (let i = 0; i < e.target.files.length; i++) {
        const newFile = e.target.files[i];
        setFiles(prevState => [...prevState, newFile]);
    };
  };


    const fireStore = firebase.database().ref("/newVehicle");
    let data = {
      brandName: brandName,
      Price:price,
      url: url
    };

 
    const handleUpload = () => {
      const promises = [];
      files.forEach(file => {
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        promises.push(uploadTask);
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
              .child(file.name)
              .getDownloadURL()
              .then(url => {
                setUrl(prevState => [...prevState, url]);
                console.log('url: ', url);
              });
          }
        );
      });
      Promise.all(promises)
      .then(() => console.log('All files uploaded', url))
    };

    const handleSubmit =  () => {
     fireStore.push(data);
     console.log("success:", data)
    }


    return (  
        <div>
            <h3>Admin here</h3>
            <br/>
            <br />
            <input type="file" multiple onChange={handleChange} />
            <br />
            <br />
            <progress value={progress} max="100" />
            <br />
            
             <br />
             <button onClick={handleUpload}>Upload</button>
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
                 <br />
                 <button onClick={handleSubmit}>Submit</button>
                 <br />
                 <br />
                 {url}
             {/* <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" /> */}
            </div>
    );
}
 
export default AdminPage;