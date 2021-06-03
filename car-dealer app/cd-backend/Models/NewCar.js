const mongoose = require('mongoose');

const newCarSchema = new mongoose.Schema(
{  
   id: Number,
   brand: {
    type:String
   },
   model: {
    type:String
   },
   year: {
    type:Number
   },
   transmission: {
    type:String
   },
   fuel: {
    type:String
   },
   topSpeed: {
    type:String
   },
   engineSize: {
    type: String
   },
   bodyType: {
    type: String
   },
   color: {
    type: String
   }
}, 
{ collection: "vehicles"}
);

module.exports = new mongoose.model('vehicles', newCarSchema);