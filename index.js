const express=require('express');
const { connect } = require('./config/db');
const { noticeRouter } = require('./routes/notice.route');
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();

app.use('/api',noticeRouter);

app.listen(process.env.Port, async()=>{
    try {
        await connect;
        console.log('Connected to Database');
    } catch (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${process.env.Port}`);
})