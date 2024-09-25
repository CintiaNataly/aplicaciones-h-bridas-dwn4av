import { leerArchivoLibros, escribirArchivoLibros } from "../model/librosModel.js";

const getTodosLibros = (req, res) => {
    let libros = leerArchivoLibros();
    res.status(200).json(libros);
}


const getTodosLibrosId = (req, res) => {
    const libroId = parseInt(req.params.id);
    let libros = leerArchivoLibros();
    const libro = libros.find(a => a.id === libroId);

    if(lirbo) {
        res.status(200).json(lirbo);
    } else {
        res.status(404).json({message: "Libro no encontrado"});
    }
}


const crearLibro = (req, res) => {
    let libros = leerArchivoLibros();
    const nuevoLibro = {
        id: libros.length > 0 ? libros.length + 1 : 1,
        libro: req.body.libro
    }
   libros.push(nuevoLibro);
   escribirArchivoLibros(libros);
   res.status(201).json(nuevoLibro);
}


const actualizarLibro = (req, res) => {
    const libroId = parseInt(req.params.id);
    let libros = leerArchivoLibros();
    const libroIndex = libros.findIndex(a => a.id === libroId);

    if(libroIndex !== -1) {
        libros[libroIndex] = {id: libroId, ...req.body};
        escribirArchivoLibros(libros);
        res.status(200).json(libros[libroIndex])
    } else {
        res.status(404).json({message: "Libro no encontrado"});
    }
}


const eliminarLibro = (req, res) => {
    const libroId = parseInt(req.params.id);
    let libros = leerArchivoLibros();
    const libroIndex = libros.findIndex(a => a.id === libroId);

    if(libroIndex !== -1) {
        libros.splice(libroIndex, 1)
        escribirArchivoLibros(libros);
        res.status(204).send();
    } else {
        res.status(404).json({message: "Libro no encontrado"});
    }
}


export {getTodosLibros, getTodosLibrosId, crearLibro, actualizarLibro, eliminarLibro}