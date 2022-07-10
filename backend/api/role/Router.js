
// import { HttpStatusCode } from '../../response/httpcode.js'
// import { response } from '../../response/response.js'

// evitar importar varias librerias
class RoleRouter { // recibe
  constructor (router, controller, response, HttpStatusCode) {
    this._router = router()
    this._ctrl = controller// instancia
    this._response = response
    this._httpCode = HttpStatusCode
    this.registerRoutes()
  }
  // refactorizacion de codigo

  registerRoutes () {
    this._router.get('/', this.handleGetRole.bind(this))
    this._router.post('/', this.handlePostRole.bind(this)) //  contexto de this, bindriar cambiar o mantener el contexto de una funcion
    this._router.delete('/', this.handleDeleteRole.bind(this))
    this._router.put('/', this.handlePutRole)
  }
  // manejadores

  async handleGetRole (req, res) {
    try {
      const result = await this._ctrl.getAllRole()
      // this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        res.send('No hay nada aun, intenta ingresar un role')
        // this._response.success(req, res, 'No hay canciones', this._httpCode.not_found)
      }
      res.send(result)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePostRole (req, res) {
    const role = req.body // body
    const result = await this._ctrl.createNewRole(role)// result recibe el mensaje del controlador
    res.send(result)
  }

  async handleDeleteRole (req, res) {
    const role = req.body
    const result = await this._ctrl.deleteRole(role)
    res.send(result)
  }

  handlePutRole (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put song')
  }
}

// handle fucion que se encarga manejar todas las peticiones que vengan en esta ruta

export default RoleRouter
