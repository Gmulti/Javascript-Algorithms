exports.config =
    modules:
        definition: false
        wrapper: false
    paths:
      watched: ['library','example']
    files:
        javascripts:
            joinTo:
                'js/library.js': /^library/
                'js/example.js': /^example/
                'js/vendor.js': /^bower_components/
        stylesheets:
            joinTo:
                'css/vendor.css': /^bower_components/