
// import { HttpStatusCode } from '../../response/httpcode.js'
// import { response } from '../../response/response.js'

// evitar importar varias librerias
class SongRouter { // recibe
  constructor (router, controller, response, httpCode, createSongValidation, checkToken) {
    this._router = router()
    this._ctrl = controller// instancia
    this._response = response
    this._httpCode = httpCode
    this._chekSong = createSongValidation
    this._checkToken = checkToken
    this.registerRoutes()
  }
  // refactorizacion de codigo

  registerRoutes () {
    this._router.get('/', this._checkToken, this.handleGetSong.bind(this))
    this._router.post('/', this._chekSong, this.handlePostSong.bind(this)) //  contexto de this, bindriar cambiar o mantener el contexto de una funcion
    this._router.delete('/', this.handleDeleteSong.bind(this))
    this._router.put('/', this.handlePutSong.bind(this))
  }
  // manejadores

  async handleGetSong (req, res) {
    try {
      const result = await this._ctrl.getAllSong()
      // this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        res.send('No hay canciones aun, intenta ingresar alguna cancion')
        // this._response.success(req, res, 'No hay canciones', this._httpCode.not_found)
      }
      res.send(result)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePostSong (req, res) {
    const song = req.body // body
    const result = await this._ctrl.createNewSong(song)// result recibe el mensaje del controlador
    res.send(result)
  }

  async handlePutSong (req, res) {
    const song = req.body
    await this._ctrl.updateSong(song)
    res.send('Se ha actualizado con exito')
  }

  async handleDeleteSong (req, res) {
    const song = req.body
    const result = await this._ctrl.deleteSong(song)
    res.send(result)
  }
}

// handle fucion que se encarga manejar todas las peticiones que vengan en esta ruta

export default SongRouter
