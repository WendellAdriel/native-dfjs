var dialogsModule = require('ui/dialogs');
var Observable = require("data/observable").Observable;

function Test(info) {
  info = info || {};

  var viewModel = new Observable({
    nome : info.nome || ''
  });

  viewModel.alerta = function () {
    var mensagem;

    if (viewModel.get('nome') === undefined || viewModel.get('nome') === null || viewModel.get('nome') === '') {
      mensagem = 'Digite seu nome!!!';
    } else {
      mensagem = 'Parabéns, seu primeiro alerta ' + viewModel.get('nome') + '!!!';
    }

    dialogsModule.alert({
      message : mensagem,
      okButtonText : 'Botão personalizado'
    });
  }

  return viewModel;
}

module.exports = Test;
