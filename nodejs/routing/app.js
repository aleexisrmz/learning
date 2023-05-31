const http = require('http');
const cursos = require('./cursos');
const { type } = require('os');

const servidor = http.createServer((req,res)=>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudesGET(req, res);
        case 'POST':
            return manejarSolicitudesPOST(req, res);
        default:
            res.statusCode = 501;
            return res.end("El metodo no puede ser manejado por el servidor");
    }
});

function manejarSolicitudesGET(req, res){
    const path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        return res.end("Bienvenido a mi primera API creado con nodeJS");
    }
    else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }
    else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }
    res.statusCode = 404;
    return res.end("El recurso solicitado no existe");
}

function manejarSolicitudesPOST(req, res){
    const path = req.url;

/*     if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('El servidor recibió una solicitud POST');
    } */

    if(path === '/cursos/programacion'){
        res.statusCode = 200;
        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);

            console.log(cuerpo.titulo);
            res.end('El servidor recibió una solicitud POST');
        });
    }
/*     res.statusCode = 404;
    return res.end("El recurso solicitado no existe"); */
}

const PUERTO = 3000;


servidor.listen(PUERTO, ()=>{
    console.log("El servidor está listo");
});