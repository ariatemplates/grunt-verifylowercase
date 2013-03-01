[![Build Status](https://travis-ci.org/ariatemplates/grunt-verifylowercase.png)](https://travis-ci.org/ariatemplates/grunt-verifylowercase)
# grunt-verifylowercase

Verifies that files have lowercase extensions.
Starting with version 0.2.0, this plugin is compatible with both Grunt version 0.3 and 0.4.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-verifylowercase`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-verifylowercase');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

`verifylowercase` is a multitask. Inside your `grunt.js` add a section named `verifylowercase` containing the list of files that should be analyzed.

The grunt task will fail if a filename has an uppercase letter in it's extension.

### Config example

With Grunt 0.3, the format to be used is:

```
verifylowercase : {
   all : {
      files : ["src/**"]
   }
}
```

With Grunt 0.4 (on `verifylowercase` version 0.2.0 and above), `verifylowercase` uses the standard [grunt configuration format](http://gruntjs.com/configuring-tasks#files) for files.
For example, using the compact format:

```
verifylowercase : {
   all : {
      src: ["src/**"]
   }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].


## License
Copyright (c) 2012 Aria Templates
Licensed under the Apache 2.0 license.
