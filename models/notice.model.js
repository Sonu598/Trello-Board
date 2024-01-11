const mongoose=require('mongoose');

const noticeSchema=mongoose.Schema({
    author: String,
    title: String,
    description: String,
    date:Date
})

const noticeModel=mongoose.model('notice',noticeSchema);

module.exports={
    noticeModel
}