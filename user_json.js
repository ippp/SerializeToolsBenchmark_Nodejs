var message = {"id":1001,"name":"Jack Mofiier","email":"fdanifndasure321@hotmail.com","phone":1234567890};

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var jsonOb = JSON.stringify(message);
}
var endTime = +new Date();
console.log('json.length:', jsonOb.length);
console.log('serialize run time:', endTime - startTime);

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var json = JSON.parse(jsonOb);
}
var endTime = +new Date();
console.log('json.length:', json.length);
console.log('serialize run time:', endTime - startTime);
