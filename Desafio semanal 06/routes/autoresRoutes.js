import express from "express"
import {getTodosAutores, getTodosAutoresId, crearAutor, actualizarAutor, eliminarAutor} from "../controllers/autoresController.js";

const router = express.Router();


// Todos los libros
router.get('/', getTodosAutores);

// Libros por id
router.get('/:id', getTodosAutoresId);

// Crear libro
router.post('/', crearAutor);

// Actualizar un libro
router.put('/:id', actualizarAutor);

// Eliminar un libro
router.delete('/:id', eliminarAutor);

export default router;