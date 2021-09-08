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
                res.status(200).json({
                  success: true,
                  data,
                })
          })
        } catch(error) {
          res.status(500).json({ success: false, error })
        }
      })
    // pay off some credit
    router.post("/pay", validateToken, async (req, res) => {
        try {
        let paymentList = req.body;
        db.repay(paymentList, (err, data) => {
            if(err){
                res.status(500).json({
                    success: false,
                })
            } else {
                db.getCustomerSummaries((err, newData) => {
                    res.status(200).json({
                        success: true,
                        data: newData
                    })
                })
            }
        })
    } catch(error) {
      res.status(500).json({ success: false, error })
    }
  })

  return router;
}

module.exports = routes