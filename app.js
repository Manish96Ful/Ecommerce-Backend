import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan());
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.get("/",(req,res)=>{
    res.status(200).json({
    success: true,
    message: "Ecommerce API is running 🚀"
    });
});  

export default app;