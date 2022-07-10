/*
import express from 'express'
// instanciando express
const app = express()
// puerto que escucha
const port = 3000

// esta funcion recibe dos parametros request abreviacion req (paquete que es un objeto json)
// response abreviacion es res ,es quien responde la peticon
//  function contestadorRutas (request, response) {
// console.log(request)
// response.send('request recibido')
// }
// http://localhost:3000/soyunaruta
//  se crea un ruta tipo get y recibe como parametro la ruta ose el /
//  como segundo parametro una funcion que se encargue de responder a nuestra ruta
// se pasa como un callback
app.get('/soyunaruta')
// tambien se conoce como routing porque enruta
app.listen(port, function contestadorRutas () {
  console.log('Servidor inidiado')
})
*/
console.log(process.env.MYVARIABLE)
