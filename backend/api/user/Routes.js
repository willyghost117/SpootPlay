export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._chekUser = createUserValidation
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/singup', this._chekUser, this.handleSingUp.bind(this))
    this._router.get('/', this.handleGetUser.bind(this))
    this._router.delete('/', this.handleDeleteUser.bind(this))
    this._router.put('/', this.handlePutUser.bind(this))
  }

  async handleSingUp (req, res) {
    const result = await this._ctrl.createNewUser(req.body)
    // if (result) {
    //   await this._response.error(req, res, result, 201)
    // }
    this._response.success(req, res, result, this._httpCode.Ok)
  }

  async handleGetUser (req, res) {
    // const result = this._ctrl.getAllUser()
    try {
      const result = await this._ctrl.getAllUser()
      // this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        res.send('No exist a user, retry entry one')
        // this._response.success(req, res, 'No hay canciones', this._httpCode.not_found)
      }
      res.send(result)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
    // res.send(result)
  }

  async handleDeleteUser (req, res) {
    console.log('se cargo el handle')
    const user = req.body
    const result = await this._ctrl.deleteUser(user)
    res.send(result)
  }

  async handlePutUser (req, res) {
    const user = req.body
    await this._ctrl.updateUser(user)
    res.send('Se ha actualizado con exito')
  }
}
