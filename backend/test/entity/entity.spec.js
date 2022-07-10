import { expect } from 'chai'
import { describe, it } from 'mocha'
//  archivos a testear este caso por defecto (default)los puntos son para salir
import { Song } from '../../api/song/Song.js'
import { Artist } from '../../api/artist/Artist.js'
import Auth from '../../api/auth/Auth.js'
import { Genre } from '../../api/genre/Genre.js'
import { Playlist } from '../../api/playlist/Playlist.js'
import { Role } from '../../api/role/Role.js'
import User from '../../api/user/User.js'

//  escribiendo un test(segun mocha)
//  metodo describe crea un bloque para ejecutar varios test(empaquetar un test)

describe('testing Song Class(description)', () => {
//  setup class(instanciar clase)
  const song = new Song({
    title: 'title',
    uri: 'uri',
    duration: 'duration',
    anio: 2000,
    image: 'image',
    idArtist: 1,
    idGenero: 1
  })
  it('should have a title', () => {
    expect(song._title).to.equal('title')
  })
  it('should have a uri', () => {
    expect(song._uri).to.equal('uri')
  })
  it('should have a duration', () => {
    expect(song._duration).to.equal('duration')
  })
  it('should have a anio', () => {
    expect(song._anio).to.equal(2000)
  })
  it('should have a image', () => {
    expect(song._image).to.equal('image')
  })
  it('should have a idArtist', () => {
    expect(song._idArtist).to.equal(1)
  })
  it('should have a idGenero', () => {
    expect(song._idGenero).to.equal(1)
  })
  // it('should return a uri', () => {
  // const result = song.returnNumber()
  // expect(result).to.equal('uri')

  // })
})

describe('testing Artist Class(description)', () => {
  //  setup class(instanciar clase)
  const artist = new Artist({
    id: null,
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar'
  })
  it('should have a id null', () => {
    expect(artist._id).to.equal(null)
  })
  it('should have a firstName', () => {
    expect(artist._firstName).to.equal('firstName')
  })
  it('should have a lastName', () => {
    expect(artist._lastName).to.equal('lastName')
  })
  it('should have a avatar', () => {
    expect(artist._avatar).to.equal('avatar')
  })
})

describe('testing Auth Class(description)', () => {
  //  setup class(instanciar clase)
  const auth = new Auth({
    state: 'state' || false,
    username: 'username',
    email: 'email' || '',
    token: 'token' || '',
    message: 'message' || ''
  })
  it('should have a auth true or false', () => {
    expect(auth._state).to.equal(false)
  })
  it('should have a username', () => {
    expect(auth._username).to.equal('username' || '')
  })
  it('should have a email', () => {
    expect(auth._email).to.equal('email' || '')
  })
  it('should have a token', () => {
    expect(auth._token).to.equal('token' || '')
  })
  it('should have a message', () => {
    expect(auth._message).to.equal('message' || '')
  })
})

describe('testing Genre Class(description)', () => {
  //  setup class(instanciar clase)
  const genre = new Genre({
    id: null,
    name: 'name'
  })
  it('should have a id null', () => {
    expect(genre._id).to.equal(null)
  })
  it('should have a name genre', () => {
    expect(genre._name).to.equal('name')
  })
})

describe('testing Playlist Class(description)', () => {
  //  setup class(instanciar clase)
  const playlist = new Playlist({
    id: null,
    name: 'name',
    description: 'description',
    userId: 'userId'
  })
  it('should have a id null', () => {
    expect(playlist._id).to.equal(null)
  })
  it('should have a name', () => {
    expect(playlist._name).to.equal('name')
  })
  it('should have a description', () => {
    expect(playlist._description).to.equal('description')
  })
  it('should have a user id', () => {
    expect(playlist._userId).to.equal('userId')
  })
})

describe('testing Role Class(description)', () => {
  //  setup class(instanciar clase)
  const role = new Role({
    id: null,
    name: 'name'
  })
  it('should have a id null', () => {
    expect(role._id).to.equal(null)
  })
  it('should have a name role', () => {
    expect(role._name).to.equal('name')
  })
})

describe('testing User Class(description)', () => {
  //  setup class(instanciar clase)
  const user = new User({
    id: null,
    username: 'username',
    email: 'willy@ghost.com',
    password: 'password'
  })
  it('should have a id null', () => {
    expect(user._id).to.equal(null)
  })
  it('should have a username', () => {
    expect(user._username).to.equal('username')
  })
  it('should have a  email', () => {
    expect(user._email).to.equal('willy@ghost.com')
  })
  it('should have a  password', () => {
    expect(user._password).to.equal('password')
  })
})
