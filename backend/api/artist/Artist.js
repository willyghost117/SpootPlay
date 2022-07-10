export class Artist {
  constructor (artist) {
    this._id = artist.id
    this._firstName = artist.firstName
    this._lastName = artist.lastName
    this._avatar = artist.avatar
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }
}

export class Artist1 {
  constructor (artist) {
    this._id = artist.id
    this._firstName = artist.firstName
    this._lastName = artist.lastName
    this._avatar = artist.avatar
  }
}
