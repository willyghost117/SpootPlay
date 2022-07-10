// rol empaquetador
import GenreRouter from './Router.js'
import express from 'express'
import GenreController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
import { Genre } from './Genre.js'
// import json from '../../store/httpcode.js'

// import Song from '../../entity/Song.js'

export const genreModule = () => {
  // const song = new Song()
  const servicesGenre = new DBMongo()
  const genreController = new GenreController(servicesGenre, Genre)// song)
  const genreRouter = new GenreRouter(express.Router, genreController, response, HttpCode) // pasar como parametro
  return genreRouter._router
}

// const song = new Song()

// console.log(song)
