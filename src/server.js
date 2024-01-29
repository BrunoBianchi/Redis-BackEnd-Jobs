import 'dotenv/config';
import express from 'express';
import userController from './app/controllers/userController';
const app = new express();
app.use(express.json());
app.post('/users',userController.store);
app.listen(process.env.PORT,()=>{
    console.log(`'Servidor Rodando! ${process.env.PORT}`);
})
