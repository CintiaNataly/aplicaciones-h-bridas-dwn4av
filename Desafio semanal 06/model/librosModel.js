import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const archivoLibrosPath = path.join(path.dirname(__fileName), '../data/libros.json');


const leerArchivoLibros = () => {
    const data = fs.readFileSync(archivoLibrosPath, 'utf-8');
    return JSON.parse(data);
}


const escribirArchivoLibros = (data) => {
    fs.writeFileSync(archivoLibrosPath, JSON.stringify(data), 'utf-8');
}

export{leerArchivoLibros, escribirArchivoLibros};