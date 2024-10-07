import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import usersRoutes from './routes/usersRoutes.js';
import mongoose from "mongoose";
import dotenv from "dotenv/config";


const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conexion exitosa con mongodb!"))
.catch((err) => console.error("Error al conectar con mongodb!", err))

app.use(express.json());


const __fileName = fileURLToPath(import.meta.url);
app.use(express.json());
app.use(express.static(path.join(path.dirname(__fileName), 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(path.dirname(__fileName), 'public', 'index.html'));
})

app.use('/usuarios', usersRoutes);


app.listen(port, () => console.log(`http://localhost:${port}`));