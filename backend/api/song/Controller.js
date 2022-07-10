// los controladores se encargan de realizar la logica del negocio
// se coloca el codigo de logica de negocio
// d
class SongController {
  constructor (servicesSong, song, song2) {
    this._services = servicesSong
    this._entity = song
    this._entity1 = song2
  }

  getAllSong () {
    const response = this._services.all('song')
    return response
  }

  createNewSong (song) {
    const newSong = new this._entity(song)
    const response = this._services.save('song', newSong)
    return response
  }

  updateSong (song, id) {
    // const song1 = new this._entity1(song)
    const _id = song.id
    // const data = song.title
    const newUpdate1 = new this._entity1(song)
    // const newUpdate = newUpdate1.splice(0, 1)
    // console.log(data)
    const response = this._services.update('song', newUpdate1, _id)
    return response
  }

  deleteSong (id) {
    const response = this._services.delete('song', id)
    return response
  }
}

/*
export class Artist {
  constructor () {
    this._servide = null
  }

  getAllArtist () {
    return 'all artist'
  }

  createNewArtist (user) {
    console.log(user)
    return 'create new artist'
  }

  updateArtistr (user) {
    console.log(user)
    return 'update artist'
  }

  deleteArtist (id) {
    console.log(id)
    return 'deleted a artist'
  }
}
*/
export default SongController
