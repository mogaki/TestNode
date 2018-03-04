var jscafe = require('./jscafe');
var jscafe_message = require('./jscafe_message');

console.log(jscafe.message);
console.log(jscafe_message);

var jscafe_http = require('./jscafe_http');

// ここがコールバック呼出しの部分。
jscafe_http.request('http://atnd.org/events/37045', function(e, res){
  if (e) { console.error(e); }
  console.log(res);
});

var JSCafe = require('./jscafe_http2');
var jscafe = new JSCafe();

jscafe.request('http://atnd.org/events/37045');

jscafe.on('end', function(page){
  console.log(page);
});

jscafe.on('error', function(e){
  console.error(e);
});