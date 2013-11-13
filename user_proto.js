var fs = require('fs');
//var _und = require('underscore');

var Schema = require('protobuf').Schema;

var schema = new Schema(fs.readFileSync('user.desc'));

var usertest = schema['test.user'];

var ob = {id: 1001};
ob.name = "Jack Mofiier";
ob.email = "fdanifndasure321@hotmail.com";
ob.phone = 1234567890;

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var proto = usertest.serialize(ob);
}
var endTime = +new Date();
console.log('proto.length:', proto.length);
console.log('serialize run time:', endTime - startTime);

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var out = usertest.parse(proto);
}
var endTime = +new Date();
json = JSON.stringify(out)
//console.log('json format:', json);
console.log('output:', json.length);
//console.log('output:', _und.size(out));
console.log('parse run time:', endTime - startTime);
