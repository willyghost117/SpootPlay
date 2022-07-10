import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../../config/default.js'

export const helpers = {
  escryptPassword: (password) => {
    return bcrypt.hashSync(password, 10)
  },
  comparePassword: async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
  },

  // 10 representa cuantas veces se va a encriptar

  // export default helpers
  generateToken: (idUser) => {
    return jwt.sign({
      id: idUser
    }, config.jwt.secret, {
      expiresIn: '1h'
    })
  },
  verifyToken: (token) => {
    return jwt.verify(token, config.jwt.secret)
  }
}
