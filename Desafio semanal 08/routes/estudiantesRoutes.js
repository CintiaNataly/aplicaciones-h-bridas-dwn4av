import express from "express";
import { crearEstudiante, getEstudiantes, getEstudiantesById, updateEstudiante, deleteEstudiante } from "../controllers/estudiantesController.js";

const router = express.Router();

router.post('/', crearEstudiante);
router.get('/', getEstudiantes);
router.get('/:id', getEstudiantesById);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;