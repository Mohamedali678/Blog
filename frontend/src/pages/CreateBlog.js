import {  useState } from "react";
import Header from "../components/Header";
import axios from "axios"
import { useNavigate } from "react-router-dom";



function CreateBlog(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const navigate =  useNavigate()




    const fileHandle = (event) => {
        setImage(event.target.files[0])
    }

    const createBlog = async (event) => {

        event.preventDefault()

        const formData = new FormData();
        formData.append("title", title)
        formData.append("description", description);
        formData.append("blogImage", image);

       try {
        await axios.post("http://localhost:2000/api/blog/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log("Uploaded");
        navigate("/")


       }catch(error){
        console.log(error)
       }

        alert("Uploaded");
    }
    
    return <div>
        <Header/>


        <div className="container">

        <div className="row justify-content-center ">
            <div className="col-6">
                <h3>Create New Blog</h3>

                <div className="card mt-5">
                    <form className="form-control" onSubmit={createBlog}>
                        <label>Title</label>
                        <input type="text" className="form-control"
                        onChange={event => {
                            setTitle(event.target.value);
                        }}
                        ></input>
                        <label className="mt-5">Description</label>
                        <textarea type="text" className="form-control" placeholder="Enter some details"
                        onChange={event => {
                            setDescription(event.target.value)
                        }}
                        ></textarea>
                        <label className="mt-5">Blog Image</label><br></br>

                        <input type="file" className="form-control"
                        onChange={fileHandle}
                        />

                        <button type="submit" className="btn btn-warning mt-5 btn-lg px-5">Post</button>

                    </form>
                </div>
            </div>

        </div>

        </div>
    </div>

}
export default CreateBlog;