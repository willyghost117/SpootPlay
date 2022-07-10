export class Song {
  constructor (song) {
    // this._idSong = song.idSong
    this._title = song.title
    this._uri = song.uri
    this._duration = song.duration
    this._anio = song.anio
    this._image = song.image
    this._idArtist = song.idArtist
    this._idGenero = song.idGenero
    // this._created_at = song.created_at
    // this._updated_at = song.updated_at
  }
}
export class Song2 {
  constructor (song) {
    // this._idSong = song.idSong
    this._id = song.id
    this._title = song.title
    this._uri = song.uri
    this._duration = song.duration
    this._anio = song.anio
    this._image = song.image
    this._idArtist = song.idArtist
    this._idGenero = song.idGenero
    // this._created_at = song.created_at
    // this._updated_at = song.updated_at
  }
}

/*  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }

  returnNumber () {
    return 5
  }
} */
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
