// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.handleClick();
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    this.$chats.html('');
    var messages = messages || Object.values(Messages._data);
    messages.forEach((message) => {
      this.renderMessage(message);
    });

    //this or MessagesView???
    MessagesView.handleClick(event);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    this.$chats.append(MessageView.render(message));

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //target username
    $('.username').on('click', function (event) {
      var username = event.target.innerText;
      Friends.toggleStatus(username);
    });

  }

};