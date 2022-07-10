// los controladores se encargan de realizar la logica del negocio
// se coloca el codigo de logica de negocio
// d
class PlaylistController {
  constructor (servicesPlaylist, playlist) {
    this._services = servicesPlaylist
    this._entity = playlist
  }

  getAllPlaylist () {
    const response = this._services.all('playlist')
    return response
  }

  createNewPlaylist (playlist) {
    const newPlaylist = new this._entity(playlist)
    const response = this._services.save('playlist', newPlaylist)
    return response
  }

  updatePlaylist (playlist) {
    console.log(playlist)
    return 'update playlist'
  }

  deletePlaylist (id) {
    const response = this._services.delete('playlist', id)
    return response
  }
}
export default PlaylistController
