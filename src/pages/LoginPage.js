import { useState } from "react";
import { Link  , useNavigate} from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = ()=>{
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();

    const Login = async()=>{
        try {
            const response = await signInWithEmailAndPassword(getAuth(), email , password);
            console.log(response);
            navigate('/articles');
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
        <h1>Login In</h1>
        {error && <p className="error">{error}</p>} 
        <input type="email" placeholder="Email Address"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={Login}>LogIn</button>
        <Link to={"/createaccount"}>Don't have an account ? Create One here</Link>
        </>
    )
}

export default LoginPage;