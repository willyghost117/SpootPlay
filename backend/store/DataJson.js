// capa de datos
// metodos genericos
// import { json } from 'express'
import fs from 'fs'
// export
export class DataJson {
  constructor () {
    this._dataPath = './store/db.json'
    this.setTables()
  }

  setTables () {
    const tables = {
      user: [],
      song: [],
      playlist: [],
      artist: [],
      genre: [],
      role: []

    }
    const items = this.readJsonFile()
    if (items.length === 0) {
      this.writeJsonFile(tables)
    }
  }

  readJsonFile () {
    const contentFile = fs.readFileSync(this._dataPath, 'utf8')
    if (contentFile) {
      return JSON.parse(contentFile)
    }
    return []
  }

  writeJsonFile (data) {
    const jsonData = JSON.stringify(data, null, '')
    fs.writeFileSync(this._dataPath, jsonData)
  }

  generatePK (table) {
    const lastItem = this.all(table).pop()
    if (lastItem) {
      return ++lastItem._id
    }
    return 1
    // const items = this.readJsonFile()
    // items[table].pop()
  }

  save (table, data) {
    console.table(table)
    // console.log(data)
    const items = this.readJsonFile()
    data._id = this.generatePK(table)
    items[table].push(data)
    this.writeJsonFile(items)
    return 'Se han insertado los datos'
  }

  all (table) {
    const items = this.readJsonFile()
    return items[table] || []
  }

  update (table, data) {
    const json = this.all(table)
    const newItem = { _id: 1, _title: 'actualizado', _uri: 'actualizado', _duration: '3', _anio: '3', _image: '4', _idArtist: 1, _idGenero: 2 }

    for (let i = 0; i < json.length; i++) {
      // console.table(json)
      // console.table(newItem)
      if (json[i]._id === newItem._id) {
        json[i] = newItem
        // console.table(json)
        // json[newItem].push(data)
        console.table(json)
        // this.writeJsonFile(update)
        // return update
      }
    }
  }

  delete (table, data) {
    const json = this.all(table)
    const newItem = { _id: 1 }
    for (let i = 0; i < json.length; i++) {
      console.table(json)
      // console.table(newItem)
      if (json[i]._id === newItem._id) {
        json[i] = null
        // console.table(json)
        // json[newItem].push(data)
        console.table(json)
        // this.writeJsonFile(update)
        // return update
      }
    }
  }

  findByAtribute (table, atribute, value) {
    const items = this.readJsonFile()
    const item = items[table].find(item => item[atribute] === value)
    if (item) {
      return item
    }
  }
}

// const data = new DataJson()
// data.update('song')

// const data = new DataJson()
// data.delete('song')

// data.save('user', { id: null, name: 'song1', singer: 'singer1' })
// const response = data.all('song')

// const updateMostrar = data.update('song')

// console.table(updateMostrar)

// const response = data.all('artist')
// console.table(response)

// const newdata = ('song', { id: 1, title: 'actualizado', uri: 'singer1', duration: 'singer1', anio: 'singer1', image: 'singer1', idArtist: 'singer1', idGenero: 'singer1' })

// console.table(response)
// const test = new DataJson()

// const result = test.findByAtribute('user', '_username', 'tesss')
// console.table(result)
