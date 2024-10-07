import express from "express";
import { buscarPorDireccion, crearUsuario, deleteUsuarios, getUsuarios, getUsuariosById, updateUsuarios } from "../controllers/usersController.js";

const router = express.Router();

router.post('/', crearUsuario);
router.get('/', getUsuarios);
router.get('/:id', getUsuariosById);
router.get('/search/tags', buscarPorDireccion);
router.put('/:id', updateUsuarios);
router.delete('/:id', deleteUsuarios);

export default router;