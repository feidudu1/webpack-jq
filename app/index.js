// var $ = require('jquery');
if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}
var moment = require('moment');

require('../style/main.less');
var sub = require('./sub');

var app = document.createElement('div');
app.innerHTML = '<h1>Hello feifei</h1>';
app.appendChild(sub());

// 将下面js改为jq
// document.body.appendChild(app);
$('body').append('<p>s' +moment().format() + '</p>');
