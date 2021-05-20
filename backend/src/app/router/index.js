var Router = require("koa-router");
const User = require("../model/User");
const user = require("./user");

var router = new Router();


module.exports = (app) =>{
    router.get("/",(ctx,next) =>{
        ctx.body = "hello " + user.get;
    });
    require("./user")(app, Router);
  app.use(router.routes()).use(router.allowedMethods());
}