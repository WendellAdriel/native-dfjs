var dialogsModule = require('ui/dialogs');
var AwesomeViewModel = require('./awesome-view-model');

var info = new AwesomeViewModel();

exports.getInfo = function () {
  info.getAPIInfo().catch(function (error) {
    dialogsModule.alert({
      message : 'Algo deu errado!!! :(',
      okButtonText : 'OK'
    });
    return Promise.reject;
  })
  .then(function (response) {
    dialogsModule.alert({
      message : 'Dados recuperados com sucesso!!! :D',
      okButtonText : 'OK'
    });
    console.log(response);
  });
}
