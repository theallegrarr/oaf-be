const bcrypt = require('bcrypt')

console.log(bcrypt.hashSync('password', 10))
console.log(bcrypt.compareSync('password', '$2b$10$./p3Txs3ULys2q9RbHgTsOWnUXw9Okpa4.EhkIJP.w03wD4Xcdtju'))

// INSERT INTO admin (username, password) VALUES ('admin', '$2b$10$./p3Txs3ULys2q9RbHgTsOWnUXw9Okpa4.EhkIJP.w03wD4Xcdtju');