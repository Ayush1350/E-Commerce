import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import ProductRoutes from './routes/productRoutes.js'
dotenv.config();

connectDB();
const  app=express();

//middelwares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes 
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',ProductRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send(
        `<h1>Welcome to APP</h1>`
    )
    
})

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=>
{console.log(`Server is running on port http://localhost:${PORT}`)});