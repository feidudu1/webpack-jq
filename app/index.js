// var $ = require('jquery');
var moment = require('moment');

require('../style/main.less');
var sub = require('./sub');

var app = document.createElement('div');
app.innerHTML = '<h1>Hello feifei</h1>';
app.appendChild(sub());

// 将下面js改为jq
// document.body.appendChild(app);
$('body').append('<p>look st me ! wenow is' +moment().format() + '</p>');
