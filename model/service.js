const sqlite3 = require('sqlite3');
const path = require('path');
const queries = require('./queries')

class CustomerService {
    constructor(store){
        this.store = store;
        this.db = new sqlite3.Database(this.store);
    }

    async seed(query){
        try{
            await this.db.run(query)
            return null
        } catch(err){
            return err
        }
    }

    getAdmin(cb){
        this.db.get(queries.getAdmin, {}, (err, data) => {
            return cb(err, data)
        })
    }

    getCustomerSummaries(cb){
        this.db.all(queries.getCustomerSummaries, {}, (err, data) => {
            return cb(err, data)
        })
    }

    repay(data, cb){
        data.forEach(item => {
            let singleQuery = queries.updateCS(item)
            this.db.all(singleQuery, {}, (err, data) => {
                return cb(err, data)
            })
        })
    }
}


module.exports = new CustomerService(path.join(__dirname, '..', 'oaf.db'))