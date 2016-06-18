var frameModule = require('ui/frame');
var viewModule = require('ui/core/view');
var dialogsModule = require('ui/dialogs');
var MainViewModel = require('./main-view-model');

var test = new MainViewModel();

exports.config = function (args) {
  var page = args.object;
  page.bindingContext = test;
}

exports.openAlert = function () {
  dialogsModule.alert({
    message : 'Parabéns, seu primeiro alerta' + test.nome + '!!!',
    okButtonText : 'Texto super legal!!!'
  });
}

exports.changePage = function () {
  frameModule.topmost().navigate('awesome/awesome');
}
