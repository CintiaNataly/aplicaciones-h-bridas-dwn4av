import fs from "fs"
import path from "path"


const archivoAutoresPath = path.join(__dirname, '../data/autores.json');


const leerArchivoAutores = () => {
    const data = fs.readFileSync(archivoAutoresPath, 'utf-8');
    return JSON.parse(data);
}


const escribirArchivoAutores = (data) => {
    fs.writeFileSync(archivoAutoresPath, JSON.stringify(data), 'utf-8');
}

export{leerArchivoAutores, escribirArchivoAutores};