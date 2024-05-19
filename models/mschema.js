const mongoose = require("mongoose");

const mschema = new mongoose.Schema({
  id:{
    type:String,
  },
  title: {
    type: String,
    
  },
  subtitle: {
    type: String,
    
  },
  coverarthq: {
    type: String,
  },
  lastSearched: {
    type: Date,
    
    default: Date.now(),
  },
});

module.exports = mongoose.model("MusicSchema", mschema);
