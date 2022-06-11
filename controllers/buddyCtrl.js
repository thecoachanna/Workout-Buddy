// Bring in model/connection
const User = require("../models/user");

// NEW - User form
const newUserForm = (req, res) => {
  res.render("user/newUser");
};

// CREATE - New User
const saveNewUser = (req, res) => {
  console.log(req.body);
  User.create(req.body).then(() => {
    User.find({}).then(() => {
      res.redirect("/");
    });
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

module.exports = {
  newUserForm,
  saveNewUser,
  showUserProfile,
};
