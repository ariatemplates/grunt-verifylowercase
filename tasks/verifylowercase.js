/*
 * grunt-verifylowercase
 * https://github.com/ariatemplates/grunt-verifylowercase
 *
 * Copyright (c) 2012 Aria Templates
 * Licensed under the Apache license.
 */
var path = require("path");

module.exports = function (grunt) {

    /**
     * Verifies that all the files in the input directory have lowercase extensions.
     */
    grunt.registerMultiTask('verifylowercase', 'Verifies that all files have lowercase extensions.', function () {
        grunt.log.write('Verifying lowercase in file names '.cyan);
        var files = this.filesSrc;
        if (!files && grunt.file.expandFiles) {
            // grunt 0.3 compatibility
            grunt.log.write(this.data.files + ' ');
            files = grunt.file.expandFiles(this.data.files);
        }
        grunt.log.writeln('('.cyan + ('' + files.length).yellow + (' files)').cyan);
        grunt.verbose.writeln(files.join("\n"));

        if (files.length > 0) {
            files.forEach(function (filePath) {
                if (!hasLowercaseExtension(filePath)) {
                    grunt.log.error(("" + filePath).bold.red + ' has uppercase characters in the extension.'.red);
                    grunt.warn('Lowercase extension checking failed.');
                }
            });
        } else {
            grunt.log.error('No input file to check.'.bold.red);
        }

        // Fail task if errors were logged.
        if (this.errorCount) {
            return false;
        }

        // Otherwise, print a success message
        grunt.log.ok();
    });

    var hasLowercaseExtension = function (filename) {
        var extension = path.extname(filename);
        var lower = extension.toLowerCase();

        return extension === lower;
    };

    if (grunt.registerHelper) {
        // publish hasLowercaseExtension as a grunt 0.3 helper, if run with grunt 0.3
        grunt.registerHelper('hasLowercaseExtension', hasLowercaseExtension);
        hasLowercaseExtension = function (filename) {
            return grunt.helper('hasLowercaseExtension', filename);
        };
    }
};
