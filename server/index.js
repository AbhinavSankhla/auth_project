const express = require('express');
const allRoutes = require('./src/app');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json()); 

app.use(cors());
app.use(allRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});