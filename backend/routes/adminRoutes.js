const express = require('express')
const adminRouter = express.Router();

const {insertRestraunt} = require("../controllers/adminControllers/insertRestraunt.controller");

adminRouter.post('/createRestraunt', insertRestraunt)

module.exports = adminRouter

