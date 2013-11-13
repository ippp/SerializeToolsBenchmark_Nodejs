var msgpack = require('msgpack');

var message = {"id":1001,"name":"Jack Mofiier","email":"fdanifndasure321@hotmail.com","phone":1234567890};

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var pack = msgpack.pack(message); 
}
var endTime = +new Date();
console.log('package.length:', pack.length);
console.log('serialize run time:', endTime - startTime);

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var packString = msgpack.unpack(pack); 
}
var endTime = +new Date();
json = JSON.stringify(packString)
console.log('package.length:', json.length);
console.log('parse run time:', endTime - startTime);
