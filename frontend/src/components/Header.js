import { Link } from "react-router-dom";


function Header() {

    return <div className="header bg-warning" id="test">

        <ul>
            <li><Link to="/" >Blogs</Link></li>
            <li><Link to="/blog/create" >Create Blog</Link></li>
        </ul>
        
    </div>
}

export default Header;