// rol empaquetador
import RoleRouter from './Router.js'
import express from 'express'
import RoleController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
// import { DataPostgresql } from '../../store/DataPosgrate.js'
import { DBMongo } from '../../store/DBMongo.js'
import { Role } from './Role.js'
// import json from '../../store/httpcode.js'

// import Song from '../../entity/Song.js'

export const roleModule = () => {
  // const song = new Song()
  // const servicesRole = new DataJson()
  const servicesRole = new DBMongo()
  const roleController = new RoleController(servicesRole, Role)// song)
  const roleRouter = new RoleRouter(express.Router, roleController, response, HttpCode) // pasar como parametro
  return roleRouter._router
}

// const song = new Song()

// console.log(song)
