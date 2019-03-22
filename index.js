const express          = require("express"),
      app              = express(),
      bodyParser       = require("body-parser"),
      session          = require("express-session"),
      passport         = require("passport"),
      multer           = require('multer'), 
      cloudinary       = require('cloudinary'),
      sass             = require('node-sass'),
 //passportFacebook = require('passport-facebook'),
      mongoose         = require('mongoose'),
      videoJs          = require('video.js'),
      nodemailer       = require('nodemailer'),
      LocalStrategy    = require("passport-local"),
      ejs              = require('ejs'),
      helmet           = require('helmet'),
      cors             = require('cors');

const indexRouter = require('./Routes/index');
const Posts = require('./Models/Post');
const User = require('./Models/Admin');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Views/Public'));
app.set('views', __dirname + '/Views');
app.use(express.static('files'));
app.set("view engine", "ejs");

// PASSPORT CONFIGURATION
app.locals.moment = require('moment');
app.use(require("express-session")({
secret: "Secret",
resave: false,
saveUninitialized: false
}));
//SECURITY
app.use(helmet())
app.use(cors())
/* app.use(passport.initialize(), (req, res, next) => {
    res.header("Acceess-Conttrol-AllowOrigin", "*");
    res.header("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept");
}); */
//HELMET
//CORS

app.use(passport.initialize());
app.use(passport.session());
//require('./config/passport')(passport);
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
res.locals.currentUser = req.user;
next();
});

//Initializing the Landing Page
app.use('/', indexRouter);

//Mongoose Configuration
//DB COnfig
//const db = require('./config/keys').mongoURI;
//mongoose
//.connect(db)
//.catch(error => console.log(error))
//.then(() => console.log('MongoDB connected'));
//mongoose.set('debug', true);
//process.on('unhandledRejection', (reason, p) => {
//console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
// application specific logging, throwing an error, or other logic here
//});  

//================
//LISTEN
//================

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server is running on port ${port}`));