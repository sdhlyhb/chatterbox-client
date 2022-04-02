// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.handleClick();
    this.handleClick2();
    this.handleClick3();
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

  //render friends tweets in friends tweet tab
  renderFriendsMessages: function(messages) {
    // Render _all_ the messages by friends and display in tweets by friends tab.

    messages.forEach((message) => {
      $('#chatsByFriends').append(MessageView.renderFriend(message));
    });
    MessagesView.handleClick(event);

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
    $('.friendsTwt-btn').on('click', function (event) {
      $('#chatsByFriends').html('');
      var friendsTwtList = Messages.filterMessageByFriends();
      MessagesView.renderFriendsMessages(friendsTwtList);
    });


  },

  handleClick3: function(event) {
    $('.username').on('click', function (event) {
      var username = event.target.innerText;
      //we make this person a friend when clicked
      Friends.toggleStatus(username);
      var friendsTwtList = Messages.filterMessageByFriends();

      setTimeout(() => { MessagesView.renderFriendsMessages(friendsTwtList); }, 500);

      RoomsView.$select.val('FriendsRoom');
    });
  }

};