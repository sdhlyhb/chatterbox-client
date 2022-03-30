// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.handleClick(event);
    this.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var rooms = Object.keys(Rooms._data);
    rooms.forEach((room) => {
      this.renderRoom(room);
    });

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    this.$select.append(`<option>${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //grabbed the addRoom button
    this.$button.on('click', function() {
      var roomname = prompt('Enter Room Name');
      if (roomname.length > 0) {
        Rooms.add(roomname);

      } else {
        Rooms.add(roomname = 'null name');
      }
      RoomsView.$select.val(roomname);
    });
  }

};
