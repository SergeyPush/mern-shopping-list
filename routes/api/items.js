const express = require("express");
const Item = require("../../models/Item");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

router.post("/", auth, (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send("invalid data");
  }
  const newItem = new Item({
    name
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;

  Item.findOneAndDelete({ _id: id })
    .then(item => {
      if (!item) {
        return res.status(404).json({ status: fail, message: "no such item" });
      }
      res.json({ success: true });
    })
    .catch(() => res.status(404).json({ status: "not found" }));
});

module.exports = router;
