const buy_btn = document.querySelector("#buy_btn");
const btn = $('#button');

// shop button
buy_btn.addEventListener("click", () => {
  window.open("https://sagar-sharma-7.github.io/Fandom-website/public/Pages/shop.html", "_self")
})


// back to top
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});