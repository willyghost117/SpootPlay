export class User {
  constructor (user) {
    // this._id = null
    this._username = user.username
    this._email = user.email
    this._password = user.password
  }

  // password y pass libreria
  encryptPassword (password, hashPasssword) {
    this._password = hashPasssword(password)
  }
}
export class User1 {
  constructor (user) {
    this._id = user.id
    this._username = user.username
    this._email = user.email
    this._password = user.password
  }
}
