module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
        build_dir: './build',
        mac: false,
        win: false,
        linux32: false,
        linux64: true
      },
      src: ['./app**/*']
    },
    mocha: {
      options: {
        run: true,
        reporter: 'Spec',
        log: false
      },
      src: [
        'app/elements/**/test/runner.html',
        // '!**/index.html',
      ]
    }
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('release', ['nodewebkit']);
  grunt.registerTask('default', ['release']);
};