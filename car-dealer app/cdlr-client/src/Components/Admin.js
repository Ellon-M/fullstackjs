import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { storage } from '../FB/Firebase';
import  { db }  from '../FB/Firebase';

const AdminPage = () => {
    const [mainFiles, setMainFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [url, setUrl] = useState([]);
    const [progress, setProgress] = useState(0);
    const [price, setPrice] = useState(null);
    const [brandName, setBrandName] = useState(null);
    const [brandDesc, setBrandDesc] = useState(null);
    const [brand, setBrand] = useState(null);

    //details
    const [year, setYear] = useState(null);
    const [transmission, setTransmission] = useState(null);
    const [fuel, setFuel] = useState(null);
    const [topSpeed, setTopSpeed] = useState(null);
    const [engineSize, setEngineSize] = useState(null);
    const [bodyType, setBodyType] = useState(null);
    const [color, setColor] = useState(null);
    const [mileage, setMileage] = useState(null);
    const [freight, setFreight] = useState(null);
    const [insurance, setInsurance] = useState(null);
    const [inspection, setInspection] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [oldPrice, setOldPrice] = useState(null);
    const [mainUrl, setMainUrl] = useState([]);

    const history = useHistory();

    const handleChangeMain = (e) => {
      for (let i = 0; i < e.target.files.length; i++) {
        const newMainFile = e.target.files[i];
        setMainFiles(prevState => [...prevState, newMainFile]);
    }
    const reader = new FileReader();
    reader.onload = () => {
    if(reader.readyState === 2) {
      //  setMainUrl(reader.result);
    }
    }
     reader.readAsDataURL(e.target.files[0]);
  };

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      setFiles(prevState => [...prevState, newFile]);
     }
     const reader = new FileReader();
     reader.onload = (upload) => {
     if(reader.readyState === 2) {
        url.push(upload.target.result);
        setUrl(
         reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
   };
  };


    let data = {
      brand: brand,
      brandName: brandName,
      brandDesc: brandDesc,
      Price:price,
      url: url,
      year: year,
      transmission: transmission,
      fuel: fuel,
      topSpeed: topSpeed,
      engineSize: engineSize,
      bodyType: bodyType,
      color: color,
      mainUrl: mainUrl,
      freight: freight,
      mileage: mileage,
      insurance: insurance,
      inspection: inspection,
      totalPrice: totalPrice,
      oldPrice: oldPrice,
    };


    const handleUploadMain = () => {
      const promises = [];
      mainFiles.forEach(file => {
        const uploadTask = storage.ref(`mainimages/${file.name}`).put(file);
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
              .ref("mainimages")
              .child(file.name)
              .getDownloadURL()
              .then(mainUrl => {
                setMainUrl(mainUrl);
                console.log('url: ', mainUrl);
              })
          }
        );
      });
      Promise.all(promises)
      .then(() => console.log('All files uploaded', mainUrl))

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
              })
          }
        );
      });
      Promise.all(promises)
      .then(() => console.log('All files uploaded', url))

    };

    const handleSubmit =  (e) => {
      e.preventDefault();
      db.collection("newVehicle").add(data);
      console.log("success:", data);
      alert('All details uploaded successfully');
      // history.goBack();
    }



    return (  
      
        <div>
          <h3>Admin here</h3>
            <br/>
            <div className="adminContainer">
            <div className="uploadContainer">
                          Main Image: <input type="file" className="main-img-upload" onChange={handleChangeMain}  />
                          {mainFiles.map(file => {
                             return (
                             <img className="otherImgs" src={URL.createObjectURL(file)} alt="imgs"></img>
                             )
                             })}
                          <br />
                         <progress value={progress} max="100" />
                          <br />
                          <br />
                         <button onClick={handleUploadMain}>Upload</button>

                    </div>
            <div className="uploadContainer">
                           Images: <input type="file" className="main-img-upload" multiple onChange={handleChange} />
                           {files.map(file => {
                             return (
                             <img className="otherImgs" src={URL.createObjectURL(file)} alt="imgs"></img>
                             )
                             })}
                           <br/>
                         <progress value={progress} max="100" />
                          <br />
                          <br />
                         <button onClick={handleUpload}>Upload</button>
                          <br />
                          <br />
                    </div>
              <div className="formContainer">
                <form onSubmit={handleSubmit}>
                <label className="label">Brand/Type:</label>
                     <input 
                       placeholder="Brand/Type" type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}}
                      />
                      <br />
                      <br />
                     <label className="label">Brand Specs:</label>
                     <input 
                       placeholder="Brand Specifications" type="text" value={brandName} onChange={(e)=>{setBrandName(e.target.value)}}
                      />
                      <br />
                      <br />
                      <label className="label">Brand Description:</label>
                     <input 
                       placeholder="Brand and Model Description" type="text" value={brandDesc} onChange={(e)=>{setBrandDesc(e.target.value)}}
                      />
                      <br />
                      <br />
                      <label className="label">Price:</label>
                      <input id="price" type="number"
                         placeholder="Price ($)" defaultValue={price} onChange={(e)=>{setPrice(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Old Price:</label>
                      <input 
                         placeholder="Old Price ($)" value={oldPrice} onChange={(e)=>{setOldPrice(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Freight:</label>
                      <input type="number" id="freight"
                         placeholder="Freight ($)" defaultValue={freight} onChange={(e)=>{setFreight(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Insurance:</label>
                      <input type="number" id="insurance"
                         placeholder="Insurance ($)" defaultValue={insurance} onChange={(e)=>{setInsurance(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Inspection:</label>
                      <input type="number" id="inspection"
                         placeholder="Inspection($)" defaultValue={inspection} onChange={(e)=>{setInspection(e.target.value)}}
                         />
                         <br />
                         <br />
                         <button type="button" onClick={()=>{setTotalPrice(parseInt(document.getElementById('freight').value) + parseInt(document.getElementById('insurance').value) + parseInt(document.getElementById('price').value) + parseInt(document.getElementById('inspection').value))}}>Total Price</button> 
                         <br/>
                         <label className="label">{totalPrice}</label>
                         <br />
                         <label className="label">Year:</label>
                      <input 
                         placeholder="Year" value={year} onChange={(e)=>{setYear(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Mileage:</label>
                         <input 
                         placeholder="Mileage" value={mileage} onChange={(e)=>{setMileage(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Transmission:</label>
                      <input 
                         placeholder="Transmission" value={transmission} onChange={(e)=>{setTransmission(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Fuel:</label>
                      <input 
                         placeholder="Fuel" value={fuel} onChange={(e)=>{setFuel(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Top Speed:</label>
                      <input 
                         placeholder="Top Speed" value={topSpeed} onChange={(e)=>{setTopSpeed(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Engine Size:</label>
                      <input 
                         placeholder="Engine Size" value={engineSize} onChange={(e)=>{setEngineSize(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Body Type:</label>
                      <input 
                         placeholder="Body Type" value={bodyType} onChange={(e)=>{setBodyType(e.target.value)}}
                         />
                         <br />
                         <br />
                         <label className="label">Color:</label>
                         <input 
                         placeholder="color" value={color} onChange={(e)=>{setColor(e.target.value)}}
                         />
                         <br />
                         <br />
                         <button>Submit</button>
                         <br />
                         <br />
                </form>
              </div>
              </div>
        </div>
    );
}
 
export default AdminPage;