
// import { HttpStatusCode } from '../../response/httpcode.js'
// import { response } from '../../response/response.js'

// evitar importar varias librerias
class PlaylistRouter { // recibe
  constructor (router, controller, response, HttpStatusCode) {
    this._router = router()
    this._ctrl = controller// instancia
    this._response = response
    this._httpCode = HttpStatusCode
    this.registerRoutes()
  }
  // refactorizacion de codigo

  registerRoutes () {
    this._router.get('/', this.handleGetPlaylist.bind(this))
    this._router.post('/', this.handlePostPlaylist.bind(this)) //  contexto de this, bindriar cambiar o mantener el contexto de una funcion
    this._router.delete('/', this.handleDeletePlaylist.bind(this))
    this._router.put('/', this.handlePutPlaylist)
  }
  // manejadores

  async handleGetPlaylist (req, res) {
    const result = await this._ctrl.getAllPlaylist()
    // response.success(req, res, result, 202)
    res.send(result)
  }

  async handlePostPlaylist (req, res) {
    const playlist = await req.body // body
    const result = this._ctrl.createNewPlaylist(playlist)// result recibe el mensaje del controlador
    res.send(result)
  }

  async handleDeletePlaylist (req, res) {
    const playlist = req.body
    const result = await this._ctrl.deletePlaylist(playlist)
    res.send(result)
  }

  handlePutPlaylist (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put')
  }
}

// handle fucion que se encarga manejar todas las peticiones que vengan en esta ruta

export default PlaylistRouter
