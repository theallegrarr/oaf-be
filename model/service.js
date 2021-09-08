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

    async repay(data, cb){
        await data.forEach(item => {
            let singleQuery = queries.updateCS(item)
            //console.log(singleQuery)
            this.db.all(singleQuery, {}, (err, data) => {
                return null
            })
        })

        return cb(null, true)
    }
}


module.exports = new CustomerService(path.join(__dirname, '..', 'oaf.db'))