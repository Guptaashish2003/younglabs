const express = require("express")
const greet = require("../controllers/greet")



const router = express.Router()

router.route("/greet").get(greet)


module.exports = router