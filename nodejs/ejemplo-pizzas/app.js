const statusPizza = () => {
  return Math.random() < 0.8;; 
};

const pedidoPizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(statusPizza()){
            resolve("Pedido exitoso");
        }
        else{
            reject("Pedido con errores");
        }
    }, 1000);
});

/* const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
};

pedidoPizza.then(manejarPedido, rechazarPedido); */

pedidoPizza.then((mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
})
.catch((mensajeDeError)=>{
    console.log(mensajeDeError);
});