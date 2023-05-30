const http = require('http');

const servidor = http.createServer((req, res)=>{
/*     console.log("==> req (solicitud)");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end('Hola, mundo'); */

    console.log("==> req (respuesta)");
/*     console.log(res.statusCode);
    res.statusCode = 404;
    console.log(res.statusCode); */
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto: http://localhost:${PUERTO}`);
});