import React from 'react'
import { useAuth } from '../../context/auth';
import toast, { Toaster } from 'react-hot-toast';
import {Outlet} from 'react-router-dom';

const Private = () => {
    const [auth,setAuth]=useAuth();

    React.useEffect(()=>{
    //    const data= localStorage.getItem
    //    ('auth')
    //    const parsedata=JSON.parse(data)

      auth.isLogin ? <Outlet/> : toast.error("Login is required")

       
    })
}

export default Private
