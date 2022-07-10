import Server from './Server.js'
import { config } from '../config/default.js'

// funcion como punto d entrada
function main (config) {
  const server = new Server(config)
  server.start()
}

main(config.api)
