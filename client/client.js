var app = angular.module('ticketApp', []);
console.log("Angular is running!");


app.controller('ParentController', ['$http', function($http){
    // we use 'this' instead of $scope
    var parent = this;
    parent.ticket = { created: new Date(),
                      updated: new Date()
                    };
    parent.ticketsReturned = [];

    parent.getTickets = function(){
      console.log('getTickets ran');
      $http.get('/ticketData').then(function(response){
        console.log(response);
        return parent.ticketsReturned = response.data;

        if (response.status !== 200){
          console.log('Error on getting data in getTickets()');
        }
      })
    }

    parent.sendData = function(){
      $http.post('/ticketData/add', parent.ticket).then(function(response){
        console.log(response);
        parent.ticket = {};
        // this will empty the form each ticket
        parent.getTickets();
        console.log(parent.ticketsReturned);
      })
    }

    parent.getTickets();
    // this will load get the tickets in the database when the page loads


}])
