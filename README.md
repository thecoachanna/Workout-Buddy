# GymBuddy
Web App to help gym enthusiasts find a workout buddy!
<!-- https://git.heroku.com/workoutbuddy.git -->

# Your project idea
Build a web app to connect people who are looking for a workout buddy, where users can select activities they are interested in and attend activity with other users. User can create and edit profile. Select + delete workouts and see their upcoming schedule.

# MVP
- Require OAuth login
- Make "create new" user form and submit to database
- Create a "show" page displaying each workout and details
- Link each activity to their show details page
- Allow user to select activity and add to schedule on show page
- Create a schedule on the index page to show users upcoming schedule/sign-ups
- Add a "delete" button to each activity on user's schedule
- Add an "edit" button to user profile and/or activity details page

# Stretch Goals
- Allow for user to create activity
- Allow for in app messaging/chat with other users

# Front-end
I'm planning to use EJS, but may change as I go.

# List of Mongoose models and their properties
- User
username/email: String
password: String

- Profile
First name: String
Last Name: String
Gender ID: String
Goals: String
Interested Activity: String

- ActivityDetails
Gym: String
Address: String
Gym Info: String
Sign-ups: Number

# User Stories
As a user I want to be able to create a user profile
As a user I want to be able to edit my profile
As a user I want to see a selection of meet-ups so that I can choose to attend the ones I want
As a user I want to be able to select a meet-up and see specific details
As a user I want to see an event schedule of the meet-ups I've chosen
As a user I want to be able to delete an event or cancel if I can't attend

# Stretch Stories
As a user I want to be able to create my own events inside the app
As a user I want to be able to chat inside the app with other users

# Wireframes
https://docs.google.com/presentation/d/1Hjh6BKxFQ_-RXyMLIXUdgVvFPzcF33TI6KAxQZWqE10/edit?usp=sharing