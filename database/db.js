const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config();

const dbusername=process.env.DB_USERNAME;
const dbpassword=process.env.DB_PASSWORD;



 const Connection=async()=>{
    const URL=`mongodb+srv://${dbusername}:${dbpassword}@properties.aphnmm7.mongodb.net/`
    //console.log('Connection URL:', URL);
    //const URL=`mongodb+srv://${dbusername}:${dbpassword}@rentproperty.amfwt8o.mongodb.net/`
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database Connected Successfully');
    }
    catch(error){
        console.log('Error while Connecting with Database',error);
    }

}
module.exports=Connection;