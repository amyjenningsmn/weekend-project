var express = require('express');
var router = express.Router();
var Ticket = require('../../models/ticket');

// the server sent any /ticketData requests here.

router.get('/', function(request, response){
  Ticket.find({}, function(err, tickets){
    // 'tickets' is param name, could be banSand
    // .find() means find ALL, in this case {}'s
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(tickets);
      // this will populate our parent.ticketsReturned array per the getTickets function
    }
  })
})

router.post('/add', function(request, response){
  console.log('Requested:', request.body);
  // this is our form data we submitted in index.html
  var newTicket = new Ticket(request.body);
  // it has our ticket model because we required it.

  newTicket.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Assignment Saved!');
      response.sendStatus(200);
    }
  })

})

module.exports = router;
