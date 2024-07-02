import express from "express"
import cors from 'cors'
import login from './routes/login.routes.js';
import register from './routes/register.routes.js';
import usuarios from './routes/usuarios.routes.js';

const app= express()

app.use(express.json())
app.use(cors())


app.use(login);
app.use(register);

app.use(usuarios);

app.listen(3002)
console.log('Server is running on port', 3002)