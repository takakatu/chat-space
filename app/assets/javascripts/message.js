$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="contributor-box">
            <div class="contributor-name">
              ${message.user_name}
            </div>
            <div class="contributor-time">
              ${message.created_at}
            </div>
          </div>
          <div class="main-message-box">
            <p class="lwer-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
      `<div class="message" data-message-id=${message.id}>
          <div class="contributor-box">
            <div class="contributor-name">
              ${message.user_name}
            </div>
            <div class="contributor-time">
              ${message.created_at}
            </div>
          </div>
          <div class="main-message-box">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
$('#new_message').on('submit', function(e){
  e.preventDefault()
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main').append(html);
    $('.chat-main').animate({ scrollTop: $('.chat-main')[0].scrollHeight});
    $('form')[0].reset();
    $('.submit-btn').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})

$('#')

});