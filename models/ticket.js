// I think we do this so there is a model to use on the database

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
  name: String,
  type: String,
  priority: String,
  description: String,
  assignee: String,
  reporter: String,
  created: Date,
  updated, Date
});

var Ticket = mongoose.model('Ticket', ticketSchema);
// what does this 'Ticket' mean ^^^??
module.exports = Ticket;
