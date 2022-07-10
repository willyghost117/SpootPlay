
// import { HttpStatusCode } from '../../response/httpcode.js'
// import { response } from '../../response/response.js'

// evitar importar varias librerias
class ArtistRouter { // recibe
  constructor (router, controller, response, HttpStatusCode) {
    this._router = router()
    this._ctrl = controller// instancia
    this._response = response
    this._httpCode = HttpStatusCode
    this.registerRoutes()
  }
  // refactorizacion de codigo

  registerRoutes () {
    this._router.get('/', this.handleGetArtist.bind(this))
    this._router.post('/', this.handlePostArtist.bind(this)) //  contexto de this, bindriar cambiar o mantener el contexto de una funcion
    this._router.delete('/', this.handleDeleteArtist.bind(this))
    this._router.put('/', this.handlePutArtist.bind(this))
  }
  // manejadores

  async handleGetArtist (req, res) {
    const result = await this._ctrl.getAllArtist()
    // response.success(req, res, result, 202)
    res.send(result)
  }

  async handlePostArtist (req, res) {
    const artist = req.body // body
    const result = await this._ctrl.createNewArtist(artist)// result recibe el mensaje del controlador
    res.send(result)
  }

  async handleDeleteArtist (req, res) {
    const artist = req.body
    const result = await this._ctrl.deleteArtist(artist)
    res.send(result)
  }

  async handlePutArtist (req, res) {
    const artist = req.body
    const result = await this._ctrl.updateArtist(artist)
    res.send(result)
  }
}

// handle fucion que se encarga manejar todas las peticiones que vengan en esta ruta

export default ArtistRouter
