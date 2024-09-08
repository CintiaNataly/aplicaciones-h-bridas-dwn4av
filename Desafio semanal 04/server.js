import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.end("Cintia Bustos")
})


app.get("/materia", (req, res) =>{
    res.end("App Hibridas")
})


app.get("/profesor", (req, res) =>{
    res.end("Camila Marcos Galban")
})



const peliculas = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la cámara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el cáliz de fuego",
    "Harry Potter y la Orden del Fénix"
]

app.use(express.json());

app.get('/peliculas/:titulo', (req, res) => {
  const { titulo } = req.params;

  if (peliculas.includes(titulo)) {
    res.send('La película seleccionada ya está en favoritos');
  } else {
    res.status(404).send('404 - Película no encontrada');
  }
});

const productos = [
    {id: 1, nombre: "producto 1", precio: 10},
    {id: 2, nombre: "producto 2", precio: 20},
    {id: 3, nombre: "producto 3", precio: 30},
    {id: 4, nombre: "producto 4", precio: 40},
    {id: 5, nombre: "producto 5", precio: 50},
    {id: 6, nombre: "producto 6", precio: 60},
    {id: 7, nombre: "producto 7", precio: 70},
    {id: 8, nombre: "producto 8", precio: 80},
    {id: 9, nombre: "producto 9", precio: 90},
    {id: 10, nombre: "producto 10", precio: 100}
]


app.get("/productos", (req, res) =>{
    res.send(productos);
})


app.get("/productos/:id", (req, res) =>{
    let productoId = req.params.id;
    let producto = productos.find(product => product.id === parseInt(productoId));
    if(!producto) return res.send({error: `3312: producto con id ${productoId} no encontrado`});
    res.send(producto);
})


app.get("*", (req, res) =>{
    res.end("Error")
})

app.listen(3000, () => console.log("server running on port http://localhost:3000"))