var babel = require("@babel/core");

var code = "let name = 'Fundebug';\nconsole.log(`Hello, ${name}`);";

var options = { filename: "test1.js" };

babel.transform(code, options, function(err, result) {
    console.log(result.code);
});
