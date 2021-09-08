//const bcrypt = require('bcrypt')
const db = require('../model/service')
//const queries = require('../model/queries')

//console.log(bcrypt.hashSync('password', 10))
//console.log(bcrypt.compareSync('password', '$2b$10$./p3Txs3ULys2q9RbHgTsOWnUXw9Okpa4.EhkIJP.w03wD4Xcdtju'))

// INSERT INTO admin (username, password) VALUES ('admin', '$2b$10$./p3Txs3ULys2q9RbHgTsOWnUXw9Okpa4.EhkIJP.w03wD4Xcdtju');

const rData = [
    { c_id: 1, season: 2011, credit: 1300, repaid: 900},
    { c_id: 2, season: 2012, credit: 4700, repaid: 1400},
]
db.repay(rData, (err, data) => {
    console.log(err, data)
})


/**
 * @todo
 * Account for unexhausted payments
 * 1, Login
 * 3, Single Repay or remove it
*/