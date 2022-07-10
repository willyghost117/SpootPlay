// rol empaquetador
import express from 'express'
import SongRouter from './Router.js'

import SongController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
// import { DataPostgresql } from '../../store/DataPosgrate.js'
import { DBMongo } from '../../store/DBMongo.js'
import { Song, Song2 } from './Song.js'
import { validateCreteSong } from './validate.js'
import { chekToken } from './secure.js'
// import json from '../../store/httpcode.js'

// import Song from '../../entity/Song.js'

export const songModule = () => {
  // const song = new Song()
  // const servicesSong = new DataJson()
  // const servicesSong = new DataPostgresql()
  const servicesSong = new DBMongo()
  const songController = new SongController(servicesSong, Song, Song2)// song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode, validateCreteSong, chekToken) // pasar como parametro
  return songRouter._router
}

// const song = new Song()

// console.log(song)
