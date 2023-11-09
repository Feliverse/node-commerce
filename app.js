// creando servidor
const http = require('http');
// req: request (solicitud del cliente) res: response (respuesta del servidor)
// cliente: navegador, postman, etc
const server = http.createServer((req, res) => {
    
    console.log('un cliente se ha conectado');
    res.end('La conexion ha sido correcta');
    
});

server.listen(3000, ()=>{
  console.log('Servidor escuchando en el puerto 3000');
})