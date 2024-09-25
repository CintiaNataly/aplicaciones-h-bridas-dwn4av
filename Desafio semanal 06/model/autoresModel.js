import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const archivoAutoresPath = path.join(path.dirname(__fileName), '../data/autores.json');


const leerArchivoAutores = () => {
    const data = fs.readFileSync(archivoAutoresPath, 'utf-8');
    return JSON.parse(data);
}


const escribirArchivoAutores = (data) => {
    fs.writeFileSync(archivoAutoresPath, JSON.stringify(data), 'utf-8');
}

export{leerArchivoAutores, escribirArchivoAutores};