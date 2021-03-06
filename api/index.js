const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path");
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());
app.use("/api",express.static(path.join(__dirname, "images")));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));


 const storage = multer.diskStorage({
   destination: (req,file,cb) => {
     cb(null,'images')
   }, filename:(req,file,cb) => {
     cb(null, req.body.name)
   }
 });

const upload = multer({storage:storage});

app.post("/api/upload", upload.single("file"), (req,res)=> {
  res.status(200).json("file has been uploaded")
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


//FOR DEPLOYING ON HEROKU
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", function (req, res) {
  // res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Backend is running");
});

