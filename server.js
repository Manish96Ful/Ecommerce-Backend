import dotenv from 'dotenv'
import app from "./app.js";
dotenv.config();

const PORT = process.env.PORT ||4200

app.listen(PORT,()=>{
    console.log(`server is listing at PORT ${PORT}`)
})