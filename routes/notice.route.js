const express = require('express');
const { noticeModel } = require('../models/notice.model');
const noticeRouter = express.Router();

noticeRouter.post('/add', async (req, res) => {
  const payload=req.body;
    const notice=new noticeModel(payload)
    await notice.save()
    res.send({"msg":"New notice is added"})
});


noticeRouter.get('/allnotices', async (req, res) => {
  const notices=await noticeModel.find();
    res.send(notices)
});

noticeRouter.put('/notice/:id', async (req, res) => {
  const { id } = req.params;
  const { author, title, description } = req.body;

  try {
    const updatedNotice = await Notice.findByIdAndUpdate(id, { author, title, description }, { new: true });
    res.json({ success: true, notice: updatedNotice });
  } catch (err) {
    res.send(err.message);
  }
});

noticeRouter.delete('/delete/:id', async (req, res) => {
  const noticeid=req.params.id
    await noticeModel.findByIdAndDelete({_id:noticeid})
    res.send({"msg":`notice with ID:${noticeid} has been deleted.`})
});

module.exports = {
    noticeRouter
};
