import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import autoresRoutes from './routes/autoresRoutes.js';
import librosRoutes from './routes/librosRoutes.js';
import usersRoutes from './routes/usersRoutes.js';


const app = express();
const port = 3000;

app.use(express.json());


const __fileName = fileURLToPath(import.meta.url);
app.use(express.json());
app.use(express.static(path.join(path.dirname(__fileName), 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(path.dirname(__fileName), 'public', 'index.html'));
})


app.use('/autores', autoresRoutes);
app.use('/libros', librosRoutes);


function verificarRol(rolesAdmitidos) {
    return function(req, res, next){
        const rolUsuario =req.headers['x-rol'];

        if(rolesAdmitidos.includes(rolUsuario)){
            next();
        } else {
            res.status(403).json({mesaje: "Acceso denegado"})
        }
    }
}

app.get("/panel", verificarRol(["admin", "super-admin"]), (req, res) =>{
    res.send("Acceso permitido")
});


app.use('/usuarios', usersRoutes);


app.listen(port, () => console.log(`http://localhost:${port}`));