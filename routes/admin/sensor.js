var express = require('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');

var sensoresService = require('./../../services/devicesService');

router.get('/', function (req, res, next) {
  var sensores = sensoresService.getSensors();

  var data = {
    sensores: sensores
  };

  res.render('admin/Sensores/index', data);
});

router.get('/create', function (req, res, next) {

  res.render('admin/sensores/create');
});

/* router.sensors('/create', uploader.single('image'), function (req, res, next) {
  var sensores = sensoresService.getsensores();

  var newId = sensores.length + 1;

  var newsensors = {};
  newsensors.id = newId;
  newsensors.title = req.body.title;
  newsensors.image = req.file.filename;
  newsensors.description = req.body.description;
  newsensors.body = req.body.sensorsBody;

  sensoresService.savesensors(newsensors);

  res.redirect('/admin/sensores');
}); */

module.exports = router;