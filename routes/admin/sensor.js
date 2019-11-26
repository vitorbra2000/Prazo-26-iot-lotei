var express = require('express');
var router = express.Router();
//var uploader = require('../../middlewares/uploaderMiddleware');

var sensoresService = require('./../../services/devicesService');

router.get('/', function (req, res, next) {
  var sensores = sensoresService.getSensors();

  var data = {
    sensores: sensores
  };

  res.render('admin/sensores/index', data);
});

router.get('/create', function (req, res, next) {

  res.render('/admin/sensores/create');
});

router.post('/create', function (req, res, next) {
  var sensores = sensoresService.getSensors();

  var newId = sensores.length + 1;

  var newsensors = {};
  newsensors.id = newId
  newsensors.title = req.body.sensorName;

  sensoresService.savesensors(newsensors);

  res.render('/');
});

module.exports = router;