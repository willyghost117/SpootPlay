import pg from 'pg'

export class DataPostgresql {
  constructor () {
    this._pool = this.getConnection()
  }

  async getConnection () {
    const pool = new pg.Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'dbspotplay'
    })
    return pool
  }

  async save (table, data) {
    try {
      const query = `INSERT INTO ${table} (${Object.keys(data).join(',')}) VALUES (${Object.keys(data).map((current, index) => `$${index + 1}`).join(',')})`
      console.log(query)
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query, Object.values(data))
      console.log(resultPool.rows)
      return resultPool
    } catch (error) {
      console.log(error)
    }
  }

  async all (table) {
    try {
      const query = `SELECT * FROM ${table}`
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query)
      console.log(resultPool.rows)
      return resultPool.rows
    } catch (error) {
      console.log(error)
    }
  }

  async findByAtribute (table, attribute, value) {
    console.log(table, attribute, value)
    try {
      const query = `SELECT * FROM ${table} WHERE ${attribute} = $1`
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query, [value])
      return resultPool.rows[0]
    } catch (error) {
      console.log(error)
    }
  }

  async saveUpdate (table) {
    try {
      // const id = 1

      // const data = this.all(table)
      // console.log(data)
      const song = 'song'
      const table2 = {
        _id: 8,
        _title: 'actualizado',
        _uri: 'actualizado',
        _duration: '3:30',
        _anio: '2000',
        _image: '4',
        _idartist: 1,
        _idgenero: 4

      }
      const query = `UPDATE ${song} SET (${Object.keys(table2).join(',')}) VALUES (${Object.keys(table2).map((current, index) => `$${index + 1}`).join(',')}) WHERE _id = $8 `
      console.log(query)
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query, Object.values(table2))
      // console.log(resultPool.rows)
      return resultPool
    } catch (error) {
      console.log(error)
    }
  }
}

// const data1 = new DataPostgresql()
// data1.saveUpdate('song')
// console.log(response)
