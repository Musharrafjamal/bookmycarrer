const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true
        })

    console.log(`mongoDB connected: ${connect.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB