import dotenv from 'dotenv'

dotenv.config()

// objeto para almacenar las variables del server

export const config = {
  api: {
    port: process.env.PORT || 8000, // process lo trae node
    hostname: process.env.HOSTNAME || 'localhost',
    name: process.env.NAMEAPP || 'app'

  },
  db: {
    host: process.env.DB_HOST || 'localhost'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  },

  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/app'
  },

  mailPassword: {
    mail: process.env.PASSMAIL || 'mail'
  }

}
