const mongoose = require("mongoose"); 

//function to connect us to mongodb database
const connectDB = async () => {
    try 
    {
        const conn = await mongoose.connect(process.env.MONGO_URI , {
            UseNewUrlParser:    true,
            useUnifiedTopology: true,
        });
        
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } 
    catch (error) 
    {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;