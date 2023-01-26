const express         = require("express"); //fot the server
const { chats }       = require("./data/data");
const dotenv          = require("dotenv");
const cors            = require('cors');
const connectDB       = require("./config/db");
const userRoutes      = require("./routes/userRoutes");
const { notFound,
        errorHandler 
      }               = require("./middleware/errorMiddlewares");


dotenv.config();
connectDB(); //connect to the DB
const app = express();


//middleware
app.use(cors());
app.use(express.json());

//main page
app.get("/", (req, res) => {
  res.send("API running");
});

//all the user routes
app.use('/api/user', userRoutes);

//error handler middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server on port ${PORT}`));
