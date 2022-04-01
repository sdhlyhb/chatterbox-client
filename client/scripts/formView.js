// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    //render messages to the page
    setTimeout(() => { MessagesView.render(); }, 100);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var message = {
      'username': App.username,
      'text': $('#message').val(),
      'roomname': $('#rooms select').val()
    };

    //POST REQUEST w/message data
    Parse.create(message, () => {});
    App.startSpinner();
    App.fetch(App.stopSpinner());

    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};