
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer")
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json())
//connecting to the database

mongoose.connect("mongodb://0.0.0.0:27017").then(() =>{
    console.log("Database has been connected successfully")
} ).catch((error) => {
    console.log(error);
});


const blogImageLocation = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "blogImages")
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


const uploadImage = multer({
    storage: blogImageLocation
})


const blogModel = require("./model/blogModel");

app.post("/api/blog/create", uploadImage.single("blogImage"), async(req, res) => {

    try {

        const createBlog = blogModel({
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename
        })

        const saveData = await createBlog.save();

        res.send(saveData);

    }catch(error){
        console.log(error)
    }

})



app.use("/blogImages", express.static("blogImages"))

//displaying All Data 
app.get("/blogs", async (req, res) => {

    try {

        const blogData = await blogModel.find();
        res.send(blogData)

    }catch(error){
        console.log(error)
    }
})


app.get("/blog/:id", async (req, res) => {

    try {

        const blogOne = await blogModel.findById({
            _id: req.params.id
        });

        res.send(blogOne)

    }catch(error){
        console.log(error)
    }
})


app.listen(2000, () => {
    console.log("Server is running on 2000 smoothly")
})