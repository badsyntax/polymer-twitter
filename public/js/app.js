 window.addEventListener('polymer-ready', function() {

  var pages = document.querySelector('site-pages');
  var progress = document.querySelector('site-progress');
  var stream = document.querySelector('page-stream').$.stream;
  var home = document.querySelector('page-home');


  // pages.addEventListener('start', function() {
  //   progress.start();
  // });

  // pages.addEventListener('stop', function() {
  //   progress.stop();
  // });

  home.addEventListener('success', function(e) {
    var username = e.detail.username;
    pages.selected = 1;
    stream.go(username);
  });

  stream.addEventListener('error', function(e) {
    e.preventDefault();
    alert('There was an error loading the stream.')
    pages.selected = 0;
  });
});

