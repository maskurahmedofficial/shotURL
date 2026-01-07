const generateRandomText = require("../helpers/randomText")
const urlSchema = require("../models/urlSchema")

const urlController = async (req,res)=>{
  try{
      const {longUrl} = req.body
    const randomText = generateRandomText()

    await new urlSchema({longUrl,shortCode:randomText}).save()

    
    res.status(200).send({longUrl:longUrl,shortUrl:`http://localhost:9000/url/${randomText}`})
  }
  catch(err){
    res.status(501).send({message:'internal server error',error:err})
  }
}

module.exports = {urlController}