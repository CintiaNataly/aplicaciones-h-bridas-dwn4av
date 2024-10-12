import express from "express";
import { crearCurso, getCursos, getCursosById, updateCursos, deleteCursos, buscarPorTag } from "../controllers/cursosController.js";

const router = express.Router();

router.post('/', crearCurso);
router.get('/', getCursos);
router.get('/:id', getCursosById);
router.get('/search/tags', buscarPorTag);
router.put('/:id', updateCursos);
router.delete('/:id', deleteCursos);

export default router;