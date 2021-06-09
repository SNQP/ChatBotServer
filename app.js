import express from "express";
import MongoManager from "./db/mongoManager";
import UserController from "./db/controller/userController";
import router from "./routes/users.js";
import authenticateJWT from "./middleware/authMiddleware.js";
import cookieParser from 'cookie-parser';
import cors from "cors";

import MsgController from "./db/controller/msgController";
import ChannelModel from "./db/model/channelModel";
import MsgModel from "./db/model/msgModel";
var mongoose = require('mongoose');


const startApp = () => {
  const app = express();
  const port = process.env.PORT || 8000;
  const corsOptions = {
    origin: "http://localhost:3000/",
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions));
  app.get("/hello", (req, res) => res.send("hello world from cules coding"));
  app.listen(port, () => console.log('Server is running on ${port}'));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  //Adding authentication JWT for every route, except login/register
  app.all('*',authenticateJWT);
  app.use("/user",router);
};

startApp();

  //ChannelModel.create({
  //  channel_name: 'hahaha',
  //  num_message: 0
  //}).then((channel) => {
  //  console.log(channel._id);
  //}).catch((err) => {
  //  console.log(err.message);
  //});
  //console.log("Created channel");

 
  //const createMessage = async(username, channel_id, message) => {
  //  let a = await MsgController.createMsg(username, channel_id, message);
  //};
  //const usname = "QuanPham";

  //const msg = "HAHAHAHAHAHAHAHAHAAHH ffqfqfqfqfqfjojo fkoqkoqkgoqkogk";

  //ChannelModel.findOne({channel_name: 'hahaha'}, (err,channel) => {
  //  const channel_id = channel._id;
  //  createMessage(usname,channel_id,msg);
  //  console.log("Created msg");
  //})
  //const object = mongoose.Types.ObjectId('60c0ff4540a3a35c1ef5d9a1');
  //ChannelModel.findOne({_id: object}, (err,channel) => {
  //  console.log(channel);
  //})

  


