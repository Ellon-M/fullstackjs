const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const MongoStore = require('connect-mongo');
const Note = require('./Models/Note');
const User = require('./Models/User');
const cookieParser = require('cookie-parser');
const app = express();

//* DB Connection *//
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
},
() => console.log("Connected to DB"));

//* Middlewares *//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({origin: ["http://localhost:3000"],
methods: ["GET", "POST", "DELETE"],
    credentials: true
}));
// Lazy session update
app.use(session({
   cookie: {
    
   },
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
   store: MongoStore.create({
       mongoUrl: process.env.DB_CONNECTION,
       touchAfter: 12 * 3600
   })
}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());


//* Passport *//
passport.use(new localStrategy(function (username, password, done){
    User.findOne({ username: username }, function (err, user) {
		if (err) return done(err);
		if (!user) return done(null, false, 'Incorrect username/password');
        
        bcrypt.compare(password, user.password, function (err, res) {
			if (err) throw err;
			if (res === false) return done(null, false, "incorrect username/password");
			if (res === true){
			return done(null, user);
            }
        });

    });

}));

passport.serializeUser(
    (user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
	User.findOne({_id: id},  (err, user) => {
		cb(err, user);
	});
});


//* Auth routes *//
app.post('/api/register', async (req, res) => {
    const{email, username, password: plainTextPassword, confirmPassword} = req.body;
    const reMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const re = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
    const rePass = /^(?=.*[a-z])/;
    if(!reMail.test(email) ) {
        return res.json({status: 'error', mailError: 'The email address you entered does not exist'})
    }
    if(!re.test(username) ) {
        return res.json({status: 'error', UserError: 'Invalid Username.'})
    }
    if(!rePass.test(plainTextPassword)) {
        return res.json({status: 'error', error: 'Invalid password'})
    }
    if (plainTextPassword.length < 5) {
        return res.json({status: 'error', error: 'Password too small. It should be at least 6 letters'})
    }
    if(plainTextPassword !== confirmPassword){
        return res.json({status: 'error', error: 'Passwords do not match'})
    }

        const password =  await bcrypt.hash(plainTextPassword, 10);
        try {
            const response = await User.create({
                email,
                username,
                password
            });
            console.log("User created successfully", response);
        } catch (error) {
            console.log(JSON.stringify(error));
            if (error.code === 11000 && error.keyValue.username != null) {
                return res.json({ UserError: 'Username already exists'});
            }
            if (error.code === 11000 && error.keyValue.email != null) {
                return res.json({ mailError: 'Email already exists'});
            }
        }
        res.json({status: 'ok', success: 'true'})
});

app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.json({
                err: "Invalid username/password"
            });
        }
      req.logIn(user, (err) =>  {
        if (err) {
            return res.json({
                err: 'Unable to Log in'
            })
        }
        res.json({
            status: 'Login Successful!'
        });
        console.log(req.user);
    });
 })(req, res, next);
});

app.get('/checkauth', (req, res) => {
    if(req.isAuthenticated()){
      res.send(req.session.passport);
    }
    else {
        return res.send({err: 'You are not logged in'});
    }
}
);

app.get('/api/user', (req, res) => {
 res.send(req.user);

//  if (req.session.id){
//      console.log(req.session)
     
//      return res.json({loggedIn: true, id: req.session.passport.user.username});
//  } else {
//      return res.json({loggedIn: false});
//  }
});




// *Notes Routes *//
app.get('/api/notes', async (req, res) => {
   try {
       const notes = await Note.find().lean();
       res.json(notes)
   }
   catch(err) {
       res.json({message: err})
   }

})

 app.post('/api/create', async(req,res) => {
     const { title, details, category } = req.body;

     try {
        const savedNote = await Note.create({
            title,
            details,
            category
        })
        console.log("Note created and saved!", savedNote);
        return res.json({status: 'aight bet'})
     } catch (err) {
         res.json({message: err})
     }
 })

 app.delete('/api/delete/:noteId', async (req, res) => {
     try {
         const id = req.params.noteId;
         res.send(id);
         const deleteNote = await Note.findByIdAndRemove(id).exec();
          console.log("Note deleted", deleteNote);
    } catch(err){
     res.json({message: err})
    }
 });

app.listen(5500, () => {
    console.log('Server up at port 5500');
})