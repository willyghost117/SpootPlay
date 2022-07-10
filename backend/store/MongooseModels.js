import mongoose from 'mongoose'
// import { defaults } from 'pg'

const userSchema = new mongoose.Schema({
  _username: {
    type: String,
    required: true
  },
  _email: {
    type: String,
    requeried: true
  },
  _password: {
    type: String,
    requeried: true
  }
})
const songSchema = new mongoose.Schema({
  _title: {
    type: String,
    required: true
  },
  _uri: {
    type: String,
    requeried: true
  },
  _duration: {
    type: String,
    requeried: true
  },
  _anio: {
    type: String,
    requeried: true
  },
  _image: {
    type: String,
    requeried: true
  },
  _idArtist: {
    type: Number,
    requeried: true
  },
  _idGenero: {
    type: Number,
    requeried: true
  }
})

const roleSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: true
  }
})

const playlistSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: true
  },
  _description: {
    type: String,
    requeried: true
  },
  _userId: {
    type: Number,
    requeried: true
  }
})

const genreSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: true
  }
})

const artistSchema = new mongoose.Schema({
  _firstName: {
    type: String,
    required: true
  },
  _lastName: {
    type: String,
    requeried: true
  },
  _avatar: {
    type: String,
    requeried: true
  }
})
const userModel = mongoose.model('User', userSchema)
const songModel = mongoose.model('Song', songSchema)
const roleModel = mongoose.model('Role', roleSchema)
const playlistModel = mongoose.model('Playlist', playlistSchema)
const genreModel = mongoose.model('Genre', genreSchema)
const artistModel = mongoose.model('Artist', artistSchema)

export const models = {
  users: userModel,
  song: songModel,
  role: roleModel,
  playlist: playlistModel,
  genre: genreModel,
  artist: artistModel
}
