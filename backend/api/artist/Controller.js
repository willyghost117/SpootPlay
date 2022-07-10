
class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  getAllArtist () {
    const response = this._service.all('artist')
    return response
  }

  createNewArtist (artist) {
    console.log(artist)
    const newArtist = new this._entity(artist)
    const response = this._service.save('artist', newArtist)
    return response
  }

  updateArtist (artist, id) {
    // const song1 = new this._entity1(song)
    const _id = artist.id
    console.log('estas en controller')
    console.log(_id)
    const newUpdate1 = new this._entity(artist)
    // const newUpdate = newUpdate1.splice(0, 1)
    // console.log(data)
    const response = this._service.update('artist', newUpdate1, _id)
    return response
  }

  deleteArtist (id) {
    const response = this._service.delete('artist', id)
    return response
  }
}

export default ArtistController
