var Observable = require("data/observable").Observable;
var fetchModule = require("fetch");

function Info(info) {
  var info = info || {};

  var viewModel = new Observable({
    numero : info.numero || null
  });

  viewModel.getAPIInfo = function () {
    return fetchModule.fetch('http://pokeapi.co/api/v2/pokemon/' + viewModel.get('numero'), {
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    .then(handleErrors)
    .then(function (response) {
      return response.json();
    })
  }

  return viewModel;
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = Info;
