const bcrypt = require('bcrypt')
const router = require('express').Router()

const createToken = require('../middlewares/giveToken')
const db = require('../model/service')
require('dotenv').config()

function routes(){

  router.post("/login", async (req, res) => {
    let token=''
    try {
      let user = req.body;
      db.getAdmin((err, data) => {
            //console.log(err, data)
            const existingUser=data
            if(!existingUser){
                res.status(400).json({ success: false, error: "User does not exist" })
            }
            const passwordsMatch = bcrypt.compareSync(user.password, existingUser.password)
            if(!passwordsMatch||user.username!='admin'){
                res.status(400).json({ success: false, error: "Bad credentials" })
            }
            //console.log(createToken(existingUser))
            token = createToken(existingUser)

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