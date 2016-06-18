var dialogsModule = require('ui/dialogs');
var cameraModule = require("camera");
var imageModule = require("ui/image");
var viewModule = require('ui/core/view');
var AwesomeViewModel = require('./awesome-view-model');

var info = new AwesomeViewModel();
var imgContainer;

exports.config = function (args) {
  var page = args.object;
  page.bindingContext = info;
  imgContainer = viewModule.getViewById(page, 'foto');
}

exports.getInfo = function () {
  if (info.numero === null || info.numero === undefined) {
    dialogsModule.alert({
      message : 'Digite um número!',
      okButtonText : 'OK'
    });
  } else {
    info.set('isLoading', true);
    info.getAPIInfo().then(function (response) {
      info.set('isLoading', false);
      dialogsModule.alert({
        message : 'O pokémon escolhido foi: ' + response.name.toUpperCase(),
        okButtonText : 'OK'
      });
    })
    .catch(function (error) {
      info.set('isLoading', false);
      dialogsModule.alert({
        message : 'Pokémon não encontrado! Digite um número de Pokémon válido!!!',
        okButtonText : 'OK'
      });
      return Promise.reject;
    });
  }
}

exports.takePicture = function () {
  var imgOptions = {
    width : 300,
    height : 300,
    keepAspectRatio : true,
    saveToGallery : true
  };
  cameraModule.takePicture(imgOptions).then(function(picture) {
    var image = new imageModule.Image();
    imgContainer.imageSource = picture;
  });
}
