// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.handleClick();
    this.handleClick2();
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    //clear the chat feed
    this.$chats.html('');
    //grab input messages or default
    var messages = messages || Object.values(Messages._data);
    //go through messages
    messages.forEach((message) => {
      //call renderMessage(below) with message
      this.renderMessage(message);
    });

    //call this function
    MessagesView.handleClick(event);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //create a username
    var username = message['username'];
    //if this person is not a friend
    if (!Friends.checkFriendship(username)) {
      //render message
      this.$chats.append(MessageView.render(message));
    } else {
      //this message is in the friends data obj, render
      this.$chats.append(MessageView.renderFriend(message));
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //target username
    $('.username').on('click', function (event) {
      var username = event.target.innerText;
      //we make this person a friend when clicked
      Friends.toggleStatus(username);

      setTimeout(() => { MessagesView.render(); }, 500);

      RoomsView.$select.val('showAll');
    });

  },

  handleClick2: function (event) {
    $('.friends-room').on('click', function (event) {
      //MessageView.$chats.html('');
      var filteredFriends = Messages.filterMessageByFriends();
      MessagesView.render(filteredFriends);
    });
  }

};