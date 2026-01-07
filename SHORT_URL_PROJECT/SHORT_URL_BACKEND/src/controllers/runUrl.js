const urlSchema = require("../models/urlSchema");

const runUrlController = async (req,res)=>{
    const {shortId} =req.params
    
    const existUrl = await urlSchema.findOne({shortCode:shortId})
    if(!existUrl) return res.status(400).send('url not found')

    res.redirect(existUrl.longUrl);
}


module.exports = runUrlController