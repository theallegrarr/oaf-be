const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')
const db = require('../model/service')
require('dotenv').config()

function routes(){
    router.get("/all", validateToken, async (req, res) => {
        try {
          db.getCustomerSummaries((err, data) => {
                console.log(data)
                res.status(200).json({
                  success: true,
                  data,
                })
          })
        } catch(error) {
          res.status(500).json({ success: false, error })
        }
      })
  router.post("/pay", validateToken, async (req, res) => {
    let token=''
    try {
      let payments = req.body;
      db.getAdmin((err, data) => {

            res.status(200).json({
              success: true,
              user: {
                id: "",
                name: "OAF",
                role: "Administrator",
                token
              },
            })
      })
    } catch(error) {
      res.status(500).json({ success: false, error })
    }
  })

  return router;
}

module.exports = routes