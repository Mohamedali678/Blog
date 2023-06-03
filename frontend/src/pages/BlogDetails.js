import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const [blogDetails, setBlogDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getBlogDetail = () => {
      axios
        .get(`http://localhost:2000/blog/${params.id}`)
        .then((response) => {
          setBlogDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getBlogDetail();
  }, [params.id]);

  return (
    <div>
      {blogDetails ? (
        <div {...blogDetails._id} className="blogDetail">
          <img
            src={`http://localhost:2000/blogImages/${blogDetails.image}`}
            alt="blogImage"
          />
          <h2 className="my-4">{blogDetails.title}</h2>
          <p>{blogDetails.description}</p>
        </div>
      ) : (
        <h6>No Blogs</h6>
      )}
    </div>
  );
}

export default BlogDetails;