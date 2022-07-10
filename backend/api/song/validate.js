import { response } from '../../response/response.js'
import expressValidation from 'express-validator'

const check = expressValidation.check
const validationResult = expressValidation.validationResult
export const validateCreteSong = [
  check('title')
    .isLength({ min: 3 })
    .exists()
    .withMessage('Name should be atleast 3 characters'),
  check('uri')
    .isLength({ min: 3 })
    .exists()
    .withMessage('Please enter a valid uri'),
  check('duration')
    .isLength({ min: 3 })
    .exists()
    .withMessage('Please enter a valid duration'),
  check('anio')
    .isLength({ min: 4 })
    .exists()
    .withMessage('Please enter a year'),
  check('image')
    .exists()
    .withMessage('Please enter a image'),
  check('idArtist')
    .exists()
    .withMessage('Please enter a Artist'),
  check('idGenero')
    .exists()
    .withMessage('Please enter a Genre of a song'),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (error) {
      response.error(req, res, error.array()[0].msg, 400)
    }
  }
]
