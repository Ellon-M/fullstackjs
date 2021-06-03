const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
   title: { 
       type: String,
       required: true 
   },
   details: {
       type: String,
       required: true
   },
   category: {
       type: String,
       required: true     
   },
   date: {
       type: Date,
       default: Date.now,
   },     
},
    { timestamps: true },
    { collection: "notes"}  
);

const model = mongoose.model('Note', NoteSchema);

module.exports = model;