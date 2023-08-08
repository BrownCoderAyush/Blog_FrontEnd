import { Link  , useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import { context } from "../App";
import { useContext } from "react";


const Navbar = ()=>{
    // const {user , isLoading} = useUser();
    const {user , setUser} = useContext(context);
    const navigate = useNavigate();
    return (
    <nav>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li> <Link to="/about">About</Link> </li>
            <li><Link to="/articles">Articles</Link></li>
        </ul>
        <div className="nav-right">
            {user?<button  onClick={()=>{ Cookies.remove('jwtToken'); setUser(null); }}>LogOut</button>:<button onClick={()=>{ navigate('/login')}}>LogIn</button>}
        </div>
    </nav>
    )
}
export default Navbar;