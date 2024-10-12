import Cursos from "../model/cursosModel.js";
import { cursosValidacion } from "../validation/validations.js";

export const crearCurso = async (req, res) => {

    try {
        const curso = new Cursos({ ...req.body });
        const guardadCurso = await curso.save();
        res.json(guardadCurso);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getCursos = async (req, res) => {
    try {
       const cursos = await Cursos.find().populate('carrera');
       res.json(cursos);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getCursosById = async (req, res) => {
    try {
       const curso = await Cursos.findById(req.params.id);
       if(!curso) return res.status(404).json({ error: "Id no encontrado" });
       res.json(curso);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const updateCursos = async (req, res) => {
    try {
       const actualizarCurso = await Cursos.findByIdAndUpdate(req.params.id, req.body, {new: true});
       res.json(actualizarCurso);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const deleteCursos = async (req, res) => {
    try {
        const actualizarCurso = await Cursos.findByIdAndDelete(req.params.id);
        res.json(actualizarCurso);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const buscarPorTag = async (req, res) => {
    try {
        const tags = req.query.tags.split(',');
        const cursos = await Cursos.find({tags: {$in: tags}});
        res.json(cursos);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};