 window.addEventListener('polymer-ready', function() {

  var pages = document.querySelector('site-pages');
  var progress = document.querySelector('site-progress');

  pages.addEventListener('progress-start', function() {
    progress.start();
  });

  pages.addEventListener('progress-stop', function() {
    progress.stop();
  });
});