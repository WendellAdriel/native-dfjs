var frameModule = require('ui/frame');
var MainViewModel = require('./main-view-model');

var test = new MainViewModel();

exports.config = function (args) {
  var page = args.object;
  page.bindingContext = test;
}

exports.openAlert = function () {
  test.alerta();
}

exports.changePage = function () {
  frameModule.topmost().navigate('awesome/awesome');
}
