const mongoose = require('mongoose')
mongoose.Promise = global.Promise //remove advertise alert

module.exports = mongoose.connect('mongodb://localhost/todo')
