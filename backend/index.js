var koa = require('koa');
var router = require('koa-router')();
var app = new koa();
var mongoose = require('mongoose');
var koaBody = require('koa-body');






mongoose.connect(
    "mongodb://localhost:27017/koaCrud",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log("mongo connection successful");
    }
  );

var schema = mongoose.Schema({
    name:String,
    age:Number,
    phone:String
})

var User = mongoose.model("User",schema);


// app.use(async ctx => {
//     ctx.body = 'Hello World';
//   });

  async function  getUser(){
        var user = await User.find()
        
        return user
    }




router.get('/user',async ( ctx,next)=>{
    var response  = await getUser();
    ctx.body = response
    // console.log (response)
    // ctx.body = "hello"
});

 router.post('/user',async (ctx,next)=>{
        
        var body =  await ctx.request.body;
        var user = new User();

        user.name = body.name;
        user.age = body.age;
        user.phone = body.phone;
        user.save();

        ctx.body = {user:user}
    
   
    
});

router.put('/user/:id', async(ctx,next)=>{
    
        var _id = ctx.request.params.id;
        
        var updateUser = await User.findByIdAndUpdate(_id, ctx.request.body)
        ctx.body={updateUser}
    
    
    
})

router.delete('/user/:id', async(ctx,next)=>{
    var _id = ctx.request.params.id;

    var deleteUser = await User.findByIdAndRemove(_id)
    ctx.body = {deleteUser}
})
    





app.use(koaBody({ multipart: true }))

app
.use(router.routes())
.use(router.allowedMethods());


app.listen(3005);

