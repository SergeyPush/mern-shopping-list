const express = require("express");
const mongoose = require("mongoose");
const items = require("./routes/api/items");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const config = require("config");
const app = express();

app.use(express.json());

// Routes
app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/auth", auth);

// Mongoose connect
mongoose
  .connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  `Server started on port ${PORT}`;
});
