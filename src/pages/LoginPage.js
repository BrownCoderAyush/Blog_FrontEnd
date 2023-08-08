import axios from "axios";
import { useContext, useState } from "react";
import { context } from "../App";
import { Link  , useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import getJWTToken from "../hooks/cookie";

const LoginPage = ()=>{
    const [username , setusername] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');
    const {user,setUser} = useContext(context);
    console.log(user , setUser , "done");
    // const res = getJWTToken();

    const navigate = useNavigate();

    const Login = async()=>{
        try {
            const response = await axios.post('/api/user/login',{
                username ,
                password 
            });
            // set jwt_token to browser 
            const jwt_token = Cookies.set('jwtToken' , response.data.data , {
                expires : new Date( Date.now() + 16*3600000), //expires after 16 hours , 
                path : '/' , 
                secure : true ,
                sameSite : "strict"
            });
            const res = getJWTToken();
            setUser(res);
            navigate('/articles');
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
        <h1>Login In</h1>
        {error && <p className="error">{error}</p>} 
        <input type="text" placeholder="username"  value={username} onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={Login}>LogIn</button>
        <Link to={"/createaccount"}>Don't have an account ? Create One here</Link>
        </>
    )
}

export default LoginPage;