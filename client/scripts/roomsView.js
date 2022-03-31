// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render(); //shows default room
    this.handleClick(event);
    this.handleChange(event);
  },

  render: function() {
    //gets array of rooms
    var rooms = Object.keys(Rooms._data);
    //goses through each room, renders
    rooms.forEach((room) => {
      this.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    this.$select.append(`<option>${roomname}</option>`);
  },

  displayCurrentRoom: function () {
    var currentRoom = RoomsView.$select.val();
    //get current messages for selected room
    var filteredMessages = Messages.filterMessageByRoomName(currentRoom);
    //clear chat html
    MessagesView.$chats.html('');
    //render room's messages to chats
    MessagesView.render(fiteredMessages);
  },


  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    this.$select.on('change', function () {
      //display current room when selected
      RoomsView.displayCurrentRoom();
    });
    //render feed to only include messages in specific room
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //grabbed the addRoom button
    this.$button.on('click', function() {
      var roomname = prompt('Enter Room Name');
      //if a roomname is given
      if (roomname.length > 0) {
        //add roomname to option list
        Rooms.add(roomname);
      } else {
        //if no input, shows default room
        Rooms.add(roomname = 'showAll');
      }
      //will change roomname selected roomname
      RoomsView.$select.val(roomname);

      setTimeout(() => { RoomsView.displayCurrentRoom(); }, 100);
    });
  }

};
