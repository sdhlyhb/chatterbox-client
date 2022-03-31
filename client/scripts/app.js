// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    //console.log(App.username);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner());

    $('.refresh-button').on('click', (e)=>{
      App.startSpinner();
      App.fetch(App.startSpinner());
      RoomsView.$select.val('showAll');
    });

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.messageClearUp();

      data.forEach((message) => {
        //push all messages to our data object
        Messages.addMessage(message);
        //console.log(Messages._data);
      });
      setTimeout(() => { MessagesView.render(); }, 500);

      callback();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });


  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
