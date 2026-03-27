const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // ✅ VERY IMPORTANT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ✅ CONNECT TO MONGODB ATLAS
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected ✅"))
.catch((err) => console.log(err));

// Routes
app.use("/", require("./server/routes/routes"));

app.listen(process.env.PORT || 10000, () => {
  console.log("Server running ");
});