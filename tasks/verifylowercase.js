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
        grunt.log.write('Verifying lowercase in file names for '.cyan);
        grunt.log.writeln(this.data.files);

        var files = grunt.file.expandFiles(this.data.files);
        grunt.verbose.writeln(files.join("\n"));

        if (files.length > 0) {
            files.forEach(function (filePath) {
                if (!grunt.helper('hasLowercaseExtension', filePath)) {
                    grunt.log.error(("" + filePath).bold.red + ' has uppercase characters in the extension.'.red);
                    grunt.warn('Lowercase extension checking failed.');
                }
            });
        } else {
            grunt.log.error('No files matching glob pattern '.bold.red + ("" + this.data.files).red);
        }

        // Fail task if errors were logged.
        if (this.errorCount) {
            return false;
        }

        // Otherwise, print a success message
        grunt.log.ok();
    });

    grunt.registerHelper('hasLowercaseExtension', function (filename) {
        var extension = path.extname(filename);
        var lower = extension.toLowerCase();

        return extension === lower;
    });
};
