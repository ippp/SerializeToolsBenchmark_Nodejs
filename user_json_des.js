var crypto = require("crypto");

var message = {"id":1001,"name":"Jack Mofiier","email":"fdanifndasure321@hotmail.com","phone":1234567890};
//var key = new Buffer("FV38uhoebdPSX2pHvAcM2JyG9QC3Y97F", "hex").toString("binary");
var key = "FV38uhoebdPSX2pHvAcM2JyG9QC3Y97F";
//var iv = new Buffer(8);
//iv.fill(0);
//var cipher = crypto.createCipher("des-ecb", key, iv );
//cipher.setAutoPadding(false);

var jsonOb = JSON.stringify(message);
var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var cipher = crypto.createCipher("des-ecb", key );
var jsonDES = cipher.update(jsonOb, "binary", "hex");
jsonDES += cipher.final( 'hex' );
}
var endTime = +new Date();
console.log('json.length:', jsonDES.length);
console.log('serialize run time:', endTime - startTime);

var startTime = +new Date();
for (var i=0; i<1e6;i++)
{
var decipher = crypto.createDecipher("des-ecb", key);
var jsonOb = decipher.update(jsonDES, "hex", "binary");
jsonOb += decipher.final("binary");
}
var endTime = +new Date();
console.log('json.length:', jsonOb.length);
console.log('serialize run time:', endTime - startTime);
