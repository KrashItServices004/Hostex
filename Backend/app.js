const express = require('express')
const app = express()
const connectDB = require("./database/connect");
connectDB();
const cors = require('cors');
app.use(cors())
const port = 5000;
const bodyparser = require('body-parser');
const HostexLoginmodal = require('./modal/hostexLoginmodal');

app.use(bodyparser.json())



const loginroutes = require('./routes/loginController')


app.use('/user', loginroutes)


app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});