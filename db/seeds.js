require("./connection")
const Event = require("../models/event")
const eventSeeds = require("./seeds.json")

Event.deleteMany({})
    .then(() => {
        return Event.insertMany(eventSeeds)
    })
        .then((event) => {
            console.log(event)
        })
        .catch(err => {
            console.log("Error in seeding data !!: ")
            console.log(err)
        })
        .finally(() => {
            process.exit()
        })