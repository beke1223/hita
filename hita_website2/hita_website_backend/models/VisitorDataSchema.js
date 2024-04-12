const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 

const VisitorData = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    numberVisitor: {
      type: Number,
    },
    perPage: {
       home: {
        type: Number,
      },
      about: {
        type: Number,
      },
      service: {
        type: Number,
      },
      resource: {
        type: Number,
      },
      news: {
        type: Number,
      },
      vacancy: {
        type: Number,
      },
      contact: {
        type: Number,
      },
      blog: {
        type: Number,
      },
    },
    perMonth:{
      month:{
        type:String,
      },
      count:{
        type:Number
      }
    }
  },
  {
    collection: "numberOfVisitors",
  }
);

module.exports = mongoose.model("Visitor", VisitorData);
