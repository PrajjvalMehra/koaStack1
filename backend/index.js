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

  async function  getUsers(){
        var user = await User.find()
        
        return user
    }

    // var findUser = User.find()


router.get('/user',async ( ctx,next)=>{

    var body = ctx.request.query;
    var response  = await User.find(body)
    ctx.body = response;
});



// router.get('/login', async (ctx,next)=>{

//   // var body = await ctx.request.body;
//   var body =  await ctx.request.body;
  
//  ctx.body = {body}

  
// })

 router.post('/user',async (ctx,next)=>{
        
        var body =  await ctx.request.body;
        var user = new User();

        user.name = body.name;
        user.age = body.age;
        user.phone = body.phone;
        user.save();

        ctx.body = {body}
    
   
    
});

router.put('/user', async(ctx,next)=>{
    
        var body = ctx.request.query;
        
        var updateUser = await User.findOneAndUpdate(body, ctx.request.body)
        ctx.body={updateUser}
    
    
    
})

router.delete('/user', async(ctx,next)=>{
    var body = ctx.request.query;

    var deleteUser = await User.findOneAndRemove(body)
    ctx.body = {deleteUser}
})
    





app.use(koaBody({ multipart: true }))

app
.use(router.routes())
.use(router.allowedMethods());


app.listen(3005);

