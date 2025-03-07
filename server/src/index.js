const app = require("./app")
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 5000;


app.listen(PORT,(err) =>{
    if(err){
        console.log({error:err})
    }
    console.log(`Server is running on port ${PORT}`)
} )