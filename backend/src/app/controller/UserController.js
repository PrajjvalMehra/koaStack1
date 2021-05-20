const model = require("../model/User");

exports.getUser  = async ( ctx,next )=>{
    var response = await model.getUser();
    ctx.body = response;
    console.log("controller")
}