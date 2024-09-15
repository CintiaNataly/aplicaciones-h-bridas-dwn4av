import express from "express"
import {getTodosLibros, getTodosLibrosId, crearLibro, actualizarLibro, eliminarLibro} from "../controllers/librosController";

const router = express.Router();


// Todos los libros
router.get('/', getTodosLibros);

// Libros por id
router.get('/:id', getTodosLibrosId);

// Crear libro
router.post('/', crearLibro);

// Actualizar un libro
router.put('/:id', actualizarLibro);

// Eliminar un libro
router.delete('/:id', eliminarLibro);