
// import { HttpStatusCode } from '../../response/httpcode.js'
// import { response } from '../../response/response.js'

// evitar importar varias librerias
class GenreRouter { // recibe
  constructor (router, controller, response, HttpStatusCode) {
    this._router = router()
    this._ctrl = controller// instancia
    this._response = response
    this._httpCode = HttpStatusCode
    this.registerRoutes()
  }
  // refactorizacion de codigo

  registerRoutes () {
    this._router.get('/', this.handleGetGenre.bind(this))
    this._router.post('/', this.handlePostGenre.bind(this)) //  contexto de this, bindriar cambiar o mantener el contexto de una funcion
    this._router.delete('/', this.handleDeleteGenre)
    this._router.put('/', this.handlePutGenre)
  }
  // manejadores

  async handleGetGenre (req, res) {
    const result = await this._ctrl.getAllGenre()
    // response.success(req, res, result, 202)
    res.send(result)
  }

  async handlePostGenre (req, res) {
    const genre = req.body // body
    const result = await this._ctrl.createNewGenre(genre)// result recibe el mensaje del controlador
    res.send(result)
  }

  handleDeleteGenre (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta delete song')
  }

  handlePutGenre (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put song')
  }
}

// handle fucion que se encarga manejar todas las peticiones que vengan en esta ruta

export default GenreRouter
