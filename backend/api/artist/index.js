import ArtistRouter from './Router.js'
import express from 'express'
import ArtistController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'

import { Artist } from './Artist.js'
// import json from '../../store/httpcode.js'

// import Song from '../../entity/Song.js'

export const artistModule = () => {
  // const song = new Song()
  const servicesArtist = new DBMongo()
  const artistController = new ArtistController(servicesArtist, Artist)// song)
  const artistRouter = new ArtistRouter(express.Router, artistController, response, HttpCode) // pasar como parametro
  return artistRouter._router
}

// const song = new Song()

// console.log(song)
