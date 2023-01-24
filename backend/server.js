const express    = require("express"); //fot the server
const { chats }  = require("./data/data");
const dotenv     = require("dotenv");
const cors       = require('cors');
const connectDB  = require("./config/db");
const userRoutes = require("./routes/userRoutes");


dotenv.config();
connectDB(); //connect to the DB
const app = express();

//middleware
app.use(cors());

//main page
app.get("/", (req, res) => {
  res.send("API running");
});

//all the user routes
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server on port ${PORT}`));
