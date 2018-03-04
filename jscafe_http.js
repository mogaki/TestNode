var http = require('http');

var JSCafe = {
  request : function(url, callback) {
    http.get(url, function(res){
      res.setEncoding('utf-8');
      var buffer = '';
      res.on('readable', function(){
        buffer += res.read();
      });
      res.on('end', function() {
        // コールバックを呼び出している部分。
        // レスポンスが全て返ってきたのでコールバックを呼び出して
        // 内容を第二引数に入れている。
        callback(null, buffer);
      });
      res.on('error', function(e) {
        // エラーが発生したらエラーメッセージを受け取り、コールバックの
        // 第一引数にエラーを入れて返します。
        // 慣例的にエラーを返す事があるメソッドの場合、コールバックの第一引数をエラーにすることが多いです。
        console.log('Got error: ' + e.message);
        callback(e, buffer);
      });
    });
  }
};

module.exports = JSCafe;