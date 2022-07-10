import { response } from '../../response/response.js'
import expressValidation from 'express-validator'

const check = expressValidation.check
const validationResult = expressValidation.validationResult
export const validateCreteRole = [
  check('name')
    .isLength({ min: 3 })
    .exists()
    .withMessage('Name should be atleast 3 characters'),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (error) {
      response.error(req, res, error.array()[0].msg, 400)
    }
  }
]
