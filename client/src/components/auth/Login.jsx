import React from 'react'
import './Register.css'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';
// import dotenv from 'dotenv'
// dotenv.config();

const Login = () => {
   const [auth,setAuth]=useAuth();
    const[password,setpassword]=React.useState("");
     const[email,setemail]=React.useState("");
     const navigate = useNavigate()
     const location =useLocation()
       
const handleSubmit = async (e) =>{
e.preventDefault();
    try {
        const res =  await axios.post(`http://localhost:8080/api/v1/auth/login`,{email,password})

        if(res.data.success){
            console.log(res.data.message)
            toast.success("Login successfully");
            localStorage.setItem('auth',JSON.stringify( res.data));
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
                isLogin:1, 
            })
            setTimeout(() => {
                const temp=location.state
                location.state== "/re" ? location.state='/' : location.state=temp
             !res.data.user.role ?  navigate(location.state || '/') : navigate( '/admin') 
             console.log(location.state)
            }, 1000);

        }
        else{
          toast.error(res.data.message)
            console.log(res.data.message)
        }
    } catch (error) {
        console.log(error)
        
    }



};
  return (
   <div className="container">
  <div className="title">Login</div>
  <div className="content">
    <form onSubmit={handleSubmit}>
      <div className="user-details">
        
        
    
          <input type="text" 
          placeholder="Enter your email" 
          className="input-box"
          value={email}
          onChange={(e)=>setemail(e.target.value)}

          required />
        

       
        

          <input type="text" 
          placeholder="Enter your password" 
          className="input-box"
          value={password} 
          onChange={(e)=> setpassword(e.target.value)}
          required />
        </div>
     
      <div className="button">
        <button type="submit" 
        defaultValue="Register" > Subimt</button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Login;
