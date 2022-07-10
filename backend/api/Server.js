import express from 'express'
import { songModule } from './song/index.js'
import { artistModule } from './artist/index.js'
import { genreModule } from './genre/index.js'
import { userModule } from './user/index.js'
import { playlistModule } from './playlist/index.js'
import { roleModule } from './role/index.js'
import { authModule } from './auth/index.js'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

// configuracion de paths
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// instanciando express

class Server {
  constructor (config) {
    this._app = express() // instanciandoo express
    this._port = config.port // declacarar esto no es seguro, lo mejor es declarar variable de entorno
    this._hostname = config.hostname
    this._name = config.name
    this._dirname = dirname(fileURLToPath(import.meta.url)) // almacena el directorio del servidor
    this._swaggerFile = YAML.load(join(dirname(fileURLToPath(import.meta.url)), '../docs/swagger.yaml'))
    this.setMiddlewares()
    this.setRoutes()// se activa la funcion cada vez que se usa server
  }

  // recibe datos json, si no no lo recibe
  setMiddlewares () {
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cors())
    this._app.use(morgan('dev'))
  }

  // ruta raiz /api/v1/song se complemente con las rutas en Router
  setRoutes () {
    this._app.use('/api/v1/song', songModule())
    this._app.use('/api/v1/artist', artistModule())
    this._app.use('/api/v1/genre', genreModule())
    // this._app.use('/api/v1/song', songModule()) // agregar modulo user
    this._app.use('/api/v1/user', userModule(express.Router))
    this._app.use('/api/v1/playlist', playlistModule(express.Router))
    this._app.use('/api/v1/role', roleModule(express.Router))
    this._app.use('/api/v1/auth', authModule(express.Router))
    this._app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(this._swaggerFile))
  }

  // declarar un metodo para iniciar el servidor
  start () {
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is runing on http://${this._hostname}:${this._port}`)
    })
  }
}

export default Server
