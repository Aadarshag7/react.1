const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://aadarshgautam40_db_user:25AUGUSTyoyo@cluster0.riejusr.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected");
    }


    catch(err){
        console.log("error:",err);
    }
};

module.exports=connectDB;
