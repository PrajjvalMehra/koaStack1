const Koa = require ('Koa');
require("dotenv").config();

const app = new Koa();
const port = process.env.PORT || 8080;

require("./src/app/config/mongo");
require("./src/app/router")(app);

console.log("port",port);

app.use(ctx=>{
    ctx.body = "welcome to koa"
});


app.listen(port, () => {
    console.log(`Server started at ${port}`)
})