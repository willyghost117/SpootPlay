import AuthRoute from './Routes.js'
import AuthController from './Controller.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
import Auth from './Auth.js'
import { helpers } from '../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'

export const authModule = (expressRoute) => {
  const authService = new DBMongo()
  const authController = new AuthController(authService, Auth, helpers.comparePassword, helpers.generateToken)
  const authRoute = new AuthRoute(expressRoute, authController, response, HttpCode)
  return authRoute._router
}
