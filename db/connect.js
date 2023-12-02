
const mongoose= require('mongoose');



const connectDb = async (URI) => {
    try {
        console.log('Connecting to the database...');
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 });
        
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

module.exports=connectDb;