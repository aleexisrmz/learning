const miURL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");

console.log(miURL.hostname); //RESULTADO : www.ejemplo.org

console.log(miURL.pathname); //RESULTADO : /cursos/programacion

console.log(miURL.searchParams); //RESULTADO : URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));