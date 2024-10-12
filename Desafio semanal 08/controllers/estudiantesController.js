import Estudiantes from "../model/estudiantesModel.js";
import { estudiantesValidacion } from "../validation/validations.js";

export const crearEstudiante = async (req, res) => {
    try {
        // Insert into
        const estudiante = new Estudiantes({ ...req.body });
        const guardadEstudiante = await estudiante.save();
        res.json(guardadEstudiante);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getEstudiantes = async (req, res) => {
    try {
       const estudiantes = await Estudiantes.find().populate('cursos');
       res.json(estudiantes);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getEstudiantesById = async (req, res) => {
    try {
       const estudiante = await Estudiantes.findById(req.params.id);
       if(!estudiante) return res.status(404).json({ error: "Id no encontrado" });
       res.json(estudiante);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const updateEstudiante = async (req, res) => {
    try {
       const actualizarEstudiante = await Estudiantes.findByIdAndUpdate(req.params.id, req.body, {new: true});
       res.json(actualizarEstudiante);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const deleteEstudiante = async (req, res) => {
    try {
        const actualizarEstudiante = await Estudiantes.findByIdAndDelete(req.params.id);
        res.json(actualizarEstudiante);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
