const { model, Schema } = require("mongoose");

const ItemScheema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Item = model("item", ItemScheema);

module.exports = Item;
