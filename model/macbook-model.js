const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const macBookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  bonus: {
    type: String,
    required: true,
  },
  bought: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("macBook", macBookSchema);
