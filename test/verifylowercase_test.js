var grunt = require('grunt');

exports['verify lowercase'] = {
    "has lowercase extension" : function (test) {
        var assertions = {
            "filename" : true,
            "name.txt" : true,
            "name.one.two" : true,
            "name...one" : true,
            "name.ONE" : false,
            "name.ONE.two" : true,
            "name.onelonegExtension" : false,
            "filename." : true,
            "filename.123" : true
        };

        test.expect(Object.keys(assertions).length);

        for (file in assertions) {
            test.equal(grunt.helper("hasLowercaseExtension", file), assertions[file]);
        }

        test.done();
    }
};
