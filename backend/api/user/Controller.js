// los controller se encargar de realizar la logica del negocio

class UserController {
  constructor (serviceUser, user, user1, hashPassword) {
    this._service = serviceUser
    this._entity = user
    this._entity1 = user1
    this._hashPassword = hashPassword
  }

  async createNewUser (user) {
    console.log(user)
    if (user.username && user.email && user.password) {
      const newUser = new this._entity(user)
      console.log(newUser)
      newUser.encryptPassword(user.password, this._hashPassword)
      console.log(newUser)
      // const response = this._service.save('users', newUser)
      await this._service.save('users', newUser)
      return 'Registrado'
    } else {
      throw new Error('Missing parameters')
    }
  }

  getAllUser () {
    const response = this._service.all('users')
    return response
  }

  updateUser (user, id) {
    const _id = user.id
    // const data = song.title
    const newUpdate1 = new this._entity1(user)
    // const newUpdate = newUpdate1.splice(0, 1)
    // console.log(data)
    const response = this._service.update('users', newUpdate1, _id)
    return response
  }

  deleteUser (id) {
    console.log(id)
    const response = this._service.delete('users', id)
    return response
  }
}

export default UserController
