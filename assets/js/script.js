// Nav bar formation
let navclass = document.querySelector("ul");
classgen = (x) => {
  navclass.classList.toggle("navdisplay");
  x.classList.toggle("change");
};
// sroll button
scrollWin = (x, y) => {
  let content = document.getElementById("content");
  content.scrollBy(x, y);
};

// Chat Message 
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "101421454944610");
chatbox.setAttribute("attribution", "biz_inbox");
//  SDK Code / chat message
window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v17.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));