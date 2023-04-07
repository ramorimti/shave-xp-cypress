const { Pool } = require('pg')

const dbConfig = {
    host: 'isilo.db.elephantsql.com',
    user: 'qoslrjcf',
    password: 'ezHAMOx-EpO95Jvjq5u6L1CiG5spj_KG',
    databse: 'qoslrjcf',
    port: 5432

}

module.exports = {
    removeUser(email) {
        return new Promise(function (resolve) {
            const pool = new Pool(dbConfig)

            pool.query('DELETE FROM users WHERE email = $1', [email], function (error, result) {
                if (error) {
                    throw error
                }
                resolve({ success: result })
            })
        })
    }
}