// Bring in model/connection
const User = require("../models/user");

// NEW - User form
const newUserForm = (req, res) => {
  res.render("user/newUser");
};

// CREATE - New User
const saveNewUser = (req, res) => {
  console.log(req.body);
  User.create(req.body).then((user) => {
    res.render("user/userProfile", { user });
  });
};

// SHOW - User Profile
const showUserProfile = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400).json(err);
      // JSON converts error to a language I can understand
      return;
    }
    res.render("user/userProfile", { user });
  });
};

// EDIT - User Profile
const editUserProfile = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.render("user/editProfile", { user });
  });
};

// UPDATE - User Profile
const updateProfile = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, user) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.redirect(`/buddy/${ user.username }`)
    }
  );
};

// GET - Onboard Page
const onboardUser = (req, res) => {
  res.render("user/onboard");
};

// GET - Login Page
const loginUser = (req, res) => {
  res.render("user/login");
};

// POST - Login
const submitLogin = (req, res) => {
  req.session.username = req.body.username;
  // console.log(req.session);
  User.find({ username: req.body.username }, (err, user) => {
    if(err) return err
    console.log(user[0].password)
    console.log(req.body.password)
    if (user[0].password === req.body.password) {
      console.log(req.body, user[0].password);
      res.redirect(`/buddy/${user[0].username}`)
      
    } else {
      res.render("user/login", { error: "Invalid Login" });
    }
  });
};

const displayProfile = (req, res) => {
  User.find({ username: req.session.username }).populate('upcomingEvents').exec( (err, user) => {
    if (err) return err;
    console.log("you've reach displayProfile")
    console.log(user)
    res.render("user/userProfile", { user: user[0] });
  });
};

// UPDATE - Add Event to Profile
const addEventToProfile = (req, res) => {
  console.log(req.body)
  User.findOneAndUpdate({username: req.params.id}, {$push:{upcomingEvents:req.body.eventId}}, { new: true },
    (err, user) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      console.log(user, req.body)
      console.log('this is the body', req.body)
      res.redirect(`/buddy/${ user.username }`)
    }
  );
};

const deleteEventFromProfile = (req, res) => {
  const eventId = req.params.eventId;
  const username = req.session.username
  console.log(eventId, username)
  User.findOneAndUpdate({ username }, {$pull:{upcomingEvents: eventId}}, { new: true },
    (err, user) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
     
      res.redirect(`/buddy/${ username }`)
    }
  );
}

module.exports = {
  newUserForm,
  saveNewUser,
  showUserProfile,
  onboardUser,
  loginUser,
  submitLogin,
  updateProfile,
  editUserProfile,
  displayProfile,
  addEventToProfile,
  deleteEventFromProfile
};
