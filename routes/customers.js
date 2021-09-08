const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')
const db = require('../model/service')
require('dotenv').config()

function routes(){
    // get customer summaries
    router.get("/all", validateToken, async (req, res) => {
        try {
          db.getCustomerSummaries((err, data) => {
                //console.log(data)
                return res.status(200).json({
                  success: true,
                  data,
                });
          })
        } catch(error) {
          return res.status(500).json({ success: false, error });
        }
      })
    // pay off some credit
    router.post("/pay", validateToken, (req, res) => {
        try {
            let paymentList = req.body;
            db.repay(paymentList, (err, data) => {
                if(data){
                    db.getCustomerSummaries((err, newData) => {
                        if(newData){
                            res.statusCode = 200
                            return res.json({
                                success: true,
                                data: newData
                            });
                        }
                    })
                }
            })
        } catch(error) {
            return res.status(500).json({ success: false, error });
        }
    })

  return router;
}

module.exports = routes