export class Genre {
  constructor (genre) {
    this._id = null
    this._name = genre.name
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }
}
// solo si hay una clase default
// export default Song
/*
export class Artist {
  constructor (artist) {
    this._id = null
    this._name = artist.name
    this._lastName = artist.lastName
    this._avatar = artist._avatar
  }
}

export class Genre {
  constructor (genre) {
    this._id = null
    this._name = genre.name
  }
}

export class Playlist {
  constructor (playlist) {
    this._id = null
    this._name = playlist.name
    this._userID = playlist.userId
  }
}

export class User {
  constructor (user) {
    this._id = null
    this._name = user.name
    this._email = user.email
    this._password = user.duration
    this._playlistId = user.playlistId
    this._idRole = user.idRole
  }
}

export class Role {
  constructor (role) {
    this._id = null
    this._role = role.name
    this._userID = role.roId
  }
}
*/
