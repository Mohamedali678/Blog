import { Routes, Route } from "react-router-dom";



import Blog from "../pages/Blog";
import CreateBlog from "../pages/CreateBlog";
import BlogDetails from "../pages/BlogDetails";

function App(){

    return <div>

        <Routes>

            <Route path="/" element={<Blog/>}/>
            <Route path="/blog/create" element={<CreateBlog/>} />
            <Route path="/blog/detail/:id" element={<BlogDetails/>} />


        </Routes>

      
      
    
    </div>
}

export default App;