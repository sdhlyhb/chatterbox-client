// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(

    `<div class="chat">
        <div class="username"><%- username %>
        </div>
        <div class="text"><%- text %>
        </div>
        <div class="roomname"><%- roomname %>
      </div>

      <div class="tweet-icons"><span class = "hide"><%- message_id %></span><i class="far fa-heart like"></i></div>



      `

  ),

  //creating a friend message to highlight upon click
  renderFriend: _.template(
    `<div class="chat">
        <div class="username"><mark><%- username %><mark>
        </div>
        <div class="text"><mark><%- text %><mark>
        </div>
        <div class="roomname"><mark><%- roomname %><mark>
      </div>

      <div class="tweet-icons"><span class = "hide"><%- message_id %></span><i class="far fa-heart like"></i></div>

      `
  )
};