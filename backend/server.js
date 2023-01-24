const express   = require("express"); //fot the server
const { chats } = require("./data/data");
const dotenv    = require("dotenv");
const cors      = require('cors');
const connectDB = require("./config/db");


dotenv.config();
connectDB(); //connect to the DB
const app = express();

//middleware
app.use(cors());

//main page
app.get("/", (req, res) => {
  res.send("API running");
});

//show all the chats
app.get("/chat", (req, res) => {
  res.send(chats);
});

//Show a single chat
app.get("/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server on port ${PORT}`));
