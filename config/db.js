const mongoose = require('mongoose')
const config = require('config');


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://110120MongoDBatlas_:110120MongoDBatlas_@workout-tracker.bkgq3.mongodb.net/Memebate?retryWrites=true&w=majority", {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected...')
    } catch(err) {
        console.error(err.message)
        // Exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB