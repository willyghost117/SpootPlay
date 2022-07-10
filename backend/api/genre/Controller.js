// los controladores se encargan de realizar la logica del negocio
// se coloca el codigo de logica de negocio
// d
class GenreController {
  constructor (serviceGenre, genre) {
    this._service = serviceGenre
    this._entity = genre
  }

  getAllGenre () {
    const response = this._service.all('genre')
    return response
  }

  createNewGenre (genre) {
    const newGenre = new this._entity(genre)
    console.table(newGenre)
    const response = this._service.save('genre', newGenre)
    return response
  }

  updateGenre (genre) {
    console.log(genre)
    return 'update genre'
  }

  deleteSong (id) {
    console.log(id)
    return 'deleted a genre'
  }
}

export default GenreController
