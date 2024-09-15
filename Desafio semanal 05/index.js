import express from "express"
import autoresRutas from "autores/autoresRutas.js"

const app = express();
const port = 3000;

app.use(express.json());

app.use('/autores', autoresRutas);
app.use('/libros', autoresRutas);

app.listen(port, () => console.log(`http://localhost:${port}`));