//const curso = require('./curso.json');

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 23452,
    "numLikes": 23452234,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};



// Objeto a Cadena de caracteres
// Cadena de caracteres en formato JSON

let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson);



// Cadena de caracteres a Objeto

let infoCursoObjeto = JSON.parse(infoCursoJson);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);