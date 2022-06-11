// Bring in model/connection
const Event = require("../models/event");

// INDEX = Get all Events
const getAllEvents = (req, res) => {
  Event.find({})
    // .populate("owner")
    .then((events) => {
      res.render("event/index", { events });
    });
};

// NEW - Event form
const newEventForm = (req, res) => {
  res.render("event/new");
};

// CREATE - New Event
const saveNewEvent = (req, res) => {
  console.log(req.body);
  Event.create(req.body).then(() => {
    Event.find({}).then(() => {
      res.redirect("/events");
    });
  });
};

// SHOW - Event Details
let showEvent = (req, res) => {
    Event.findById(req.params.id, (err, event) =>{
        console.log(event)
               res.render("event/show", { event })
    })
}

module.exports = {
  newEventForm,
  saveNewEvent,
  getAllEvents,
  showEvent
};
