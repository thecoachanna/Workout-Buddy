// Bring in model/connection
const Event = require("../models/event");

// Index = get all my bookmarks
const getAllEvents = (req, res) => {

  Event.find({})
    // .populate("owner")
    .then((events) => {
        res.render('event/index', { events })}
        
        )}
 
;

const newEventForm = (req, res) => {
  res.render("event/new");
};

const saveNewEvent = (req, res) => {
  console.log(req.body);
  Event.create(req.body).then(() => {
    Event.find({}).then(() => {
      res.redirect("/events");
    });
  });
};

module.exports = {
  newEventForm,
  saveNewEvent,
  getAllEvents,
};
