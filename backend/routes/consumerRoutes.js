const express = require("express")
const consumerRouter = express.Router();

const {getRestruants} = require('../controllers/consumerControllers/getResto.controller');

consumerRouter.get('/restraunts', getRestruants);

module.exports = consumerRouter;