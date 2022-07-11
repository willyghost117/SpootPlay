// los controller se encargar de realizar la logica del negocio

class UserController {
  constructor (serviceUser, user, user1, hashPassword, transporter) {
    this._service = serviceUser
    this._entity = user
    this._entity1 = user1
    this._hashPassword = hashPassword
    this._transporter = transporter
  }

  async createNewUser (user) {
    // console.log(user)
    if (user.username && user.email && user.password) {
      const newUser = new this._entity(user)
      // console.log(newUser)
      newUser.encryptPassword(user.password, this._hashPassword)
      // console.log(newUser)
      const response = await this._service.save('users', newUser)
      // await this._service.save('users', newUser)
      return response
    } else {
      throw new Error('Missing parameters')
    }
  }

  async getAllUser () {
    const response = await this._service.all('users')
    return response
  }

  async updateUser (user, id) {
    const _id = user.id
    // const data = song.title
    const newUpdate1 = await new this._entity1(user)
    // const newUpdate = newUpdate1.splice(0, 1)
    // console.log(data)
    const response = this._service.update('users', newUpdate1, _id)
    return response
  }

  async deleteUser (id) {
    console.log(id)
    const response = await this._service.delete('users', id)
    return response
  }

  mail (email) {
    console.log('email viene abajo')
    console.log(email)
    this._transporter.sendMail({
      from: 'Welcome a SpootPlay" <wmejiac@miumg.edu.gt>', // sender address
      to: email, // list of receivers
      subject: 'Welcome  ✔', // Subject line
      // text: 'Bienvenido sigue las instrucciones para usar la aplicacion', // plain text body
      html: '<b>En el siguiente enlace encontraras los diferentes tipo de cuenta.</b>' // html body
    })
    console.log('estamos en lo ultimo de mail')
  }
}

export default UserController
