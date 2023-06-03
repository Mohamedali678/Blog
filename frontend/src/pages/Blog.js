import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"

import { Link } from "react-router-dom";


function Blog(){



    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getAllData();
    }, [])


    const getAllData = () => {

        axios.get("http://localhost:2000/blogs").then(response => {

        setBlogs(response.data)
        }).catch(error => {
            console.log(error)
        })

    }

    return <div>
        <Header/>


        <div className="blog-title">
            <h1>Read The lastest Blogs Ever</h1>
            <p className="text-white text-center fs-4 mt-5">It's where you find different blogs out there</p>
            <button className="btn btn-warning btn-lg mt-2">Read More</button>
        </div>

        <div className="blogs">

            {
                blogs.map(index =>(

                    <div className="blog1 ">
                    <img src={`http://localhost:2000/blogImages/${index.image}` } alt="blogImage" height="150px" width="100%"/>
                    <h5>{index.title.substring(0, 80)}</h5>
                    <p>{index.description.substring(0, 70)}</p>
                    <Link className="btn btn-warning btn-sm" to={`/blog/detail/${index._id}`} >Read More</Link>
                </div>
                ) )
            }
            
            
            
        </div>
      
    </div>
}

export default Blog