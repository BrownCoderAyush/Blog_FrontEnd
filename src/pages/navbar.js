import { Link  , useNavigate} from "react-router-dom";
import useUser from "../hooks/useUser";
import { getAuth , signOut } from "firebase/auth";
const Navbar = ()=>{
    const {user , isLoading} = useUser();
    const navigate = useNavigate();
    return (
    <nav>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li> <Link to="/about">About</Link> </li>
            <li><Link to="/articles">Articles</Link></li>
        </ul>
        <div className="nav-right">
            {user?<button  onClick={()=>{
                signOut(getAuth());
            }}>LogOut</button>:<button onClick={()=>{ navigate('/login')}}>LogIn</button>}
        </div>
    </nav>
    )
}
export default Navbar;