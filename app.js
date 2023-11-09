// creando servidor
// req: request (solicitud del cliente) 
// res: response (respuesta del servidor)
// cliente: navegador, postman, etc

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo')
  console.log('un cliente se ha conectado');
})

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
})