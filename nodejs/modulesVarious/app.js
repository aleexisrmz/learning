/* MODULOS */

/* console.log("hola, mundo");
console.warn("cuidado");
console.error("Error");

console.error(new Error ("Ocurrio un error")); */





/* -------- Modulo process -------- */

/* console.log(process.argv);

console.log(process.memoryUsage()); */





/* -------- Modulo OS -------- */


/* Para ver el información sobre el sistema operativo */

const os = require('os');

/* console.log(os.type()); */

/* console.log(os.homedir()); */

/* console.log(os.userInfo()); */





/* -------- Modulo Timers -------- */

/* function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 1000, 'Node.js');

function sumar(a, b){
    console.log(a+b);
}

setTimeout(sumar, 1000, 5, 6);

console.log('Antes de setImmediate()');

setImmediate(mostrarTema, 'Node.Js')

console.log('Despues de setImmediate()');

setInterval(mostrarTema, 1500, 'NodeJS');

function sumarDos(a, b){
    console.log(a + b);
}

setInterval(sumarDos, 1500, 5, 6); */




/* -------- Modulo file System -------- */

const fs = require('fs');

fs.readFileSync('index.html', 'utf-8', (err, contenido) => {
    if(err){
        console.log(err);
        //throw err;
    }
    else{
        console.log(contenido);
    } 
    console.log('Este es un mensaje...');
});

fs.renameSync('index.html', 'main.html', (err) => {
    if (err) {
       throw err; 
    }
    console.log("Nombre cambiado exitosamente...");
});

// Agregar contenido al final de un archivo

fs.appendFileSync('index.html', '<p>Hola</p>', (err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo actualizado');
})

//Remplazar todo el contenido del archivo

fs.writeFileSync('index.html', 'Contenido Nuevo', (err)=>{
    if(err){
        throw err;
    }
    console.log('Contenido remplazado');
});

// Eliminar archivos

fs.unlinkSync('main.html', (err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo eliminado');
})