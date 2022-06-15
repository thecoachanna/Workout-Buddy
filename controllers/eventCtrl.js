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

const createEventComment = (req, res) => {
  
  Event.findById(req.params.id, (err, event) => {
    event.comments.push(req.body);
    event.save(function(err) {
      res.redirect(`/events/${event._id}`);
    });
  });
}

const deleteEventComment = (req, res) => {
  Event.findByIdAndDelete(req.params.id, (err, event) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json({message: 'Comment Deleted'})
  })
}

module.exports = {
  newEventForm,
  saveNewEvent,
  getAllEvents,
  showEvent,
  createEventComment,
  deleteEventComment
};
