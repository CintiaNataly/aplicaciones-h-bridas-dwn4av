import fs from "fs"
import path from "path"


const archivoLibrosPath = path.join(__dirname, '../data/libros.json');


const leerArchivoLibros = () => {
    const data = fs.readFileSync(archivoLibrosPath, 'utf-8');
    return JSON.parse(data);
}


const escribirArchivoLibros = (data) => {
    fs.writeFileSync(archivoLibrosPath, JSON.stringify(data), 'utf-8');
}

export{leerArchivoLibros, escribirArchivoLibros};