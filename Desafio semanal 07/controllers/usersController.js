import Users from "../model/usersModel.js";

export const crearUsuario = async (req, res) => {
    try {

        const usuario = new Users({ ...req.body });
        const guardadUsuario = await usuario.save();
        res.json(guardadUsuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getUsuarios = async (req, res) => {
    try {
       const usuarios = await Users.find();
       res.json(usuarios);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getUsuariosById = async (req, res) => {
    try {
       const usuario = await Users.findById(req.params.id);
       if(!usuario) return res.status(404).json({ error: "Id no encontrado" });
       res.json(usuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const updateUsuarios = async (req, res) => {
    try {
       const actualizarUsuario = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
       res.json(actualizarUsuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const deleteUsuarios = async (req, res) => {
    try {
        const actualizarUsuario = await Users.findByIdAndDelete(req.params.id);
        res.json(actualizarUsuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const buscarPorDireccion = async (req, res) => {
    try {
        const direccion = req.query.tags.split(',');
        const usuarios = await Users.find({tags: {$in: tags}});
        res.json(usuarios);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};