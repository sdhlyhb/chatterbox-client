// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
//_data: {0: msg1, 1: msg2....};
/*
{
campus: "hr-rpp"
created_at: "2022-03-31T22:33:38.281Z"
github_handle: "lyonqingmango"
message_id: 58135
roomname: "lobby"
text: "jj"
updated_at: "2022-03-31T22:33:38.281Z"
username: "Joanna"
}
*/

var Messages = {

  // TODO: Define how you want to store your messages.

  _data: {},
  id: 0,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  addMessage: function (message) {
    this._data[this.id] = message;
    this.id++;
    MessagesView.renderMessage(message);
  },

  filterMessageByRoomName: function (roomname) {
    //alias messages in object
    var messages = Object.values(this._data);
    //if in default room, render all messages
    if (roomname === 'showAll') {
      return messages;
    } else {
      //otherwise filter messages by roomname
      messages.filter(function (message) {
        return message['roomname'] === roomname;
      });
    }
  },

  filterMessageByUsername: function (username) {
    //alias messages in object
    var messages = Object.values(this._data);
    //filter messages by username
    messages.filter(function (message) {
      return message['username'] === username;
    });
  },

  filterMessageByFriends: function () {
    //alias messages in object
    var messages = Object.values(this._data);
    //alias friends
    var friendsList = Object.values(Friends._data);
    //filter messages by friendship
    messages.filter(function (message) {
      return Friends._data[message['username']];
    });
  },

  messageClearUp: function () {
    //empty current messages data object
    this._data = {};
    this.id = 0;
  }

};