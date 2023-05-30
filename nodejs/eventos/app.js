const EventEmitter = require('events');

//console.log(EventEmitter);

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, productos)=>{
    console.log(`Total una compra: $${total}`);
    console.log(`Numero de productos: $${productos}`);
});

emisorProductos.emit('compra', 4500, 3);