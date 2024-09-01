const http = require('http');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("INICIO");
    } else if (url === "/alumno" && method === 'GET') {
        const alumno = "Cintia Bustos - DWN4AV"

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(alumno);
    } else if (url === "/info" && method === 'GET') {
        const systemInfo = {
            plataforma: os.platform(),
            arquitectura: os.arch(),
            version: os.release(),
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(systemInfo, null, 2));
    } else if (url === "/static" && method === 'GET') {
        const data = `<!DOCTYPE html>
                        <html lang="es">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Desafio semanal 03</title>
                        </head>
                        <body>
                            <h1>Este es un archivo html</h1>
                            <p>y tiene contenido básico</p>
                        </body>
                        </html>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }
})


server.listen(PORT, () => {
    console.log(`Servidor activo en puerto: http://localhost:${PORT}`)
})