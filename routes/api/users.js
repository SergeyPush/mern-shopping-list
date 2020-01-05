const { Router } = require("express");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashedPAssword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPAssword });
    const createdUser = await user.save();
    const token = jwt.sign({ id: user.id }, config.get("jwtSecret"), {
      expiresIn: "1h"
    });
    res.status(201).json({ user: createdUser, token });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
