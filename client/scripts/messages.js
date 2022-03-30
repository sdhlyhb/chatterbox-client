// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
//_data: {0: msg1, 1: msg2....};

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
    //get values in array
    var messages = Object.values(this._data);
    //filter array by keyword
    messages.filter(function (message) {
      return message.roomname === roomname;
    });
  },
  filterMessageByUsername: function (username) {
    //get values in array
    var messages = Object.values(this._data);
    //filter array by keyword
    messages.filter(function (message) {
      return message.username === keyword;
    });
  }
};