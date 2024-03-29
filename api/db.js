const { Pool } = require('pg')

const dbConfig = {
    host: 'isilo.db.elephantsql.com',
    user: 'qoslrjcf',
    password: 'ezHAMOx-EpO95Jvjq5u6L1CiG5spj_KG',
    databse: 'qoslrjcf',
    port: 5432

}

const pool = new Pool(dbConfig)

async function deleteUser(email) {
    await pool.query('DELETE FROM users WHERE email = $1', [email])

}

async function insertUser(user) {
    const sql = 'INSERT INTO users (name, email, password, is_shaver) VALUES ($1, $2, $3, $4) returning id'
    const data = [user.name, user.email, user.password, user.is_shaver]

    const result = await pool.query(sql, data)
    const { id } = result.rows[0]

    return id
}

module.exports = {
    deleteUser,
    insertUser
}