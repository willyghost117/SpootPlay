import UserController from './Controller.js'
import UserRouter from './Routes.js'
// import { DataJson } from '../../store/DataJson.js'
// import { DataPostgresql } from '../../store/DataPosgrate.js'
import { DBMongo } from '../../store/DBMongo.js'
import { User, User1 } from './User.js'
import { helpers } from '../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { validateCreteUser } from './validate.js'
export const userModule = (expressRouter) => {
  // const userServices = new DataJson()
  const userServices = new DBMongo()
  const userController = new UserController(userServices, User, User1, helpers.escryptPassword)
  const userRouter = new UserRouter(expressRouter, userController, response, HttpCode, validateCreteUser)
  return userRouter._router
}
