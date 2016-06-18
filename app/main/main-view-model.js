var Observable = require("data/observable").Observable;

function Test(info) {
  var viewModel = new Observable({
    nome : info.nome || ''
  });

  return viewModel;
}

module.exports = Test;
