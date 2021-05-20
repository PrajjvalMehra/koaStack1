const mongoose = require("mongoose");
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