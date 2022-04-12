//code content of APP.JS
      const express = require("express");
      const mongoose = require("mongoose");
      const bodyParser = require("body-parser");
      const cors = require("cors");
      const app = express();

      //MIDDLEWARE (CORS)
      app.use(function(req, res, next){
          res.header("Access-Control-Allow-Origin", '*');
          res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
          res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
          next();
      });

      //DATABASE
      // **** change this below DB link to your mongoDB cluster ****
      //insert your mongoDB link that emerges out of the process described in teams for step by step mongoDB creation. replace <password> part with password you have given to your main user at cluster creation
      const DB = "mongodb+srv://Humpfrey:Yoobee01@cryptopix.drjzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
      const PORT = 4000;
      mongoose.connect(
          DB,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          .then(() => {
            console.log("connected to Database");
          })
          .catch(err => console.log(err))

      //ROUTES  
      app.use(bodyParser.json());
      app.get("/", (res, req) => {
          res.send("reached homepage");
      });

      app.use(cors());
      
      // this below 'UserRoute' is a variable for this project (not syntax)
      const UsersRoute = require('./routes/users');
      const CommentsRoute = require('./routes/comments');
      const NftNichesRoute = require('./routes/nftniches');

      app.use('/users', UsersRoute);
      app.use('/comments', CommentsRoute);
      app.use('/nftniches', NftNichesRoute);

      app.listen(PORT, () => {
        console.log("listening on port 4000");
      });