// rol empaquetador
import SongRouter from './Router.js'
import express from 'express'
import PlaylistController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
// import { DataPostgresql } from '../../store/DataPosgrate.js'
import { Playlist } from './Playlist.js'

export const playlistModule = () => {
  // const song = new Song()
  // const servicesPlaylist = new DataJson()
  const servicesPlaylist = new DBMongo()
  const playlistController = new PlaylistController(servicesPlaylist, Playlist)
  const playlistRouter = new SongRouter(express.Router, playlistController, response, HttpCode) // pasar como parametro
  return playlistRouter._router
}

// const song = new Song()

// console.log(song)
