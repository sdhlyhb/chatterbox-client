// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.handleClick(event);
    this.handleClick2(event);
    this.handleClick3(event);
    this.handleClick4(event);
    this.handleClickHearted(event);
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
    MessagesView.handleClickHearted(event);
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

  renderMessageInLobbyTab: function(message) {
    // TODO: Render a single message.
    //create a username
    var username = message['username'];
    //if this person is not a friend
    if (!Friends.checkFriendship(username)) {
      //render message
      $('#chatsInLobby').append(MessageView.render(message));
    } else {
      //this message is in the friends data obj, render
      $('#chatsInLobby').append(MessageView.renderFriend(message));
    }
  },

  //render friends tweets in friends tweet tab
  renderFriendsMessages: function(messages) {
    // Render _all_ the messages by friends and display in tweets by friends tab.
    $('#chatsByFriends').html('');

    messages.forEach((message) => {
      $('#chatsByFriends').append(MessageView.renderFriend(message));

    });
    MessagesView.handleClickInFriendsTabs(event);
    MessagesView.handleClickHearted(event);

  },

  //render lobby msg in lobby tab
  renderLobbyMessages: function() {
    // Render _all_ the messages by friends and display in tweets by friends tab.
    $('#chatsInLobby').html('');
    var lobbyMessages = Messages.filterMessageByRoomName('lobby');
    lobbyMessages.forEach((message) => {
      MessagesView.renderMessageInLobbyTab(message);
    });
    MessagesView.handleClickInLobbyTabs(event);
    MessagesView.handleClickHearted(event);

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

      //RoomsView.$select.val('showAll');
    });

  },

  handleClick2: function (event) {
    $('.friendsTwt-btn').on('click', function (event) {

      var friendsTwtList = Messages.filterMessageByFriends();
      MessagesView.renderFriendsMessages(friendsTwtList);

    });

  },

  handleClick3: function(event) {
    $('.lobby-btn').on('click', function (event) {
      RoomsView.$select.val('lobby');
      MessagesView.renderLobbyMessages();

    });

  },

  handleClick4: function(event) {
    $('.currentRm-btn').on('click', function (event) {
      RoomsView.displayCurrentRoom();
      //MessagesView.handleClick;

    });

  },

  handleClickInFriendsTabs: function(event) {
    $('.username').on('click', function (event) {
      var username = event.target.innerText;
      //we make this person a friend when clicked
      Friends.toggleStatus(username);
      var friendsTwtList = Messages.filterMessageByFriends();

      setTimeout(() => { MessagesView.renderFriendsMessages(friendsTwtList); }, 50);


    });
  },

  handleClickInLobbyTabs: function(event) {
    $('.username').on('click', function (event) {
      var username = event.target.innerText;
      //we make this person a friend when clicked
      Friends.toggleStatus(username);
      var friendsTwtList = Messages.filterMessageByFriends();

      setTimeout(() => { MessagesView.renderLobbyMessages(friendsTwtList); }, 50);


    });
  },

  handleClickHearted: function(event) {
    $('.tweet-icons').on('click', function(event) {
      var messageId = $(this).find('span').text();
      Likes.toggleStatus(messageId);
      if (Likes.checkLikes(messageId)) {
        $(this).find('.like').css('color', 'red');
      } else {
        $(this).find('.like').css('color', 'black');

      }


    });
  }





};