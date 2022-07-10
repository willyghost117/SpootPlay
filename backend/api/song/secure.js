import { helpers } from '../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { JsonWebTokenError } from 'jsonwebtoken'
export const chekToken = async (req, res, next) => {
  const token = req.headers['x-acces-token'] || req.headers['authorization'] || ''

  if (token) {
    const verify = await helpers.verifyToken(token)
    if (verify) {
      console.log('token valid')
      next()
    } else {
      console.log(('token valid'))
      return response.error(req, res, 'token invalid', HttpCode.UNAUTHORIZED)
    }
  } else {
    return response.error(req, res, 'token not found', HttpCode.UNAUTHORIZED)
  }
}
