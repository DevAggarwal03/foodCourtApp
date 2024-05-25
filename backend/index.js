const express = require('express')
const consumerRouter = require('./routes/consumerRoutes')
const adminRouter = require('./routes/adminRoutes')
require('dotenv').config();

const app = express();

const {dbConnect} = require('./config/dbConnect');
dbConnect("foodCourtDB");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/consumer', consumerRouter)
app.use('/api/v1/admin', adminRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send("this is the home route");
})