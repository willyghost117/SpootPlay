import mongoose from 'mongoose'
import { models } from './MongooseModels.js'
import { config } from '../config/default.js'

const mongodb = async () => {
  try {
    console.log('entre')
    const db = await mongoose.connect(config.mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}
// mongodb()

// const userModel = mongoose.model('User', userSchema)

export class DBMongo {
  constructor () {
    mongodb()
    this._models = models
  }

  async save (table, data) {
    console.log(data)
    const newModel = this._models[table](data)
    await newModel.save()
    return 'Registrado'
    // const newUser = userModel(data)
    // const res = await newUser.save()
    // console.log(res)
    // return 'OK'
  }

  async all (table) {
    const newModel = this._models[table]
    const res = await newModel.find()
    console.log('entre a all')
    return JSON.stringify(res)
  }

  async delete (table, id) {
    console.log(id)
    console.log(table)
    // const newModel = this._models[table]
    const res = await this._models[table].findByIdAndDelete(id)
    return res
  }

  async update (table, data, id) {
    console.log(id)
    console.log('esto es update en DBMongo')
    console.log(data)
    const res = await this._models[table].findByIdAndUpdate(id, data)
    return res
  }

  async findByAttribute (table, attribute, value) {
    try {
      const findByAttribute = await this._models[table].find({ [attribute]: value })
      if (findByAttribute.length > 0) {
        return findByAttribute[0]
      }
      return `no item of ${table}`
    } catch (error) {
      console.log(error)
      return `no item of ${table}`
    }
  }
}

// const test = new DBMongo()

// test.update('62c712ec2a42720cbaf57d9d', { _username: 'Actualizado' }).then(result => { console.log(result) }, error => { console.log(error) })
// test.all(song).then(result => { console.log(result) }, error => { console.log(error) })
// test.delete('62c712e7b2f6f680c8ebd9e7').then(result => { console.log(result) }, error => { console.log(error) })
// test.insertData({ _username: 'test1', _email: 'email', _password: 'password' }).then(result => { console.log(result) }, error => { console.log(error) })
// console.log(result)
