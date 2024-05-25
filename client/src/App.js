
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Header,Category,Footer,Home,SingleProduct,Newsletter,Register,Login } from './components/index';
import AppContext from './utils/context'; 
import toast, { Toaster } from 'react-hot-toast';
import Private from './components/Routes/Private';
import CreateProduct from './components/admin/CreateProduct';
import Products from './components/admin/Products';
import CreateCategory from './components/admin/CreateCategory';
import AdminDashboard from './components/admin/AdminDashboard';
import UpdateProduct from './components/admin/UpdateProduct';
import AdminOrders from './components/admin/AdminOrders';
import User from './components/user/User';
import Profile from './components/user/Profile';
import Orders from './components/user/Orders';
import Payment from "./components/payment/Payment";

function App() {
    return (
        <BrowserRouter>
        <AppContext>
        <Header />
        <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/re" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/category/:slug" element={<Category/>} />
    <Route path="/product/:slug" element={<SingleProduct/>} />  
    <Route path="/admin/create-category" element={<CreateCategory/>} />  
    <Route path="/admin/create-product" element={<CreateProduct/>} />  
    <Route path="/admin/products" element={<Products/>} />  
    <Route path="/admin" element={<AdminDashboard/>} />  
    <Route path="/user" element={<User/>} />  
    <Route path="/user/profile" element={<Profile/>} />  
    <Route path="/user/orders" element={<Orders/>} />  
    <Route path="/admin/orders" element={<AdminOrders/>} />  
    <Route path="/payment" element={<Payment/>} />  

    <Route path="/admin/product/:slug" element={<UpdateProduct/>} />  


    </Routes>
    <Toaster />
    <Newsletter />
    <Footer />
    </AppContext>
    </BrowserRouter>
    
        );
}

export default App;
