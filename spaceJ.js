Router.map(function() {
  this.route('/', function() {
    this.render('layout');
    this.render('login', {to: 'login'});
    this.render('default', {to: 'content'});
  });
  this.route('/flightdirector', function() {
    this.render('layout');
    this.render('none', {to: 'login'});
    this.render('director', {to: 'content'});
  });
})

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Template.login.events({
    'click #FlightD': function() {
      Router.go('/flightdirector');
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
