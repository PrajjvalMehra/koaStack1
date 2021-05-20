module.exports = (app, Router) => {
    const router = new Router({ prefix: "/user" });
    const controller = require("../controller/UserController");
    // router.get("/", (ctx, next) => {
    //   ctx.body = "user world";
    // });
  
    router.get("/", controller.getUser);
  
    app.use(router.routes()).use(router.allowedMethods());
  };
  