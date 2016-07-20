var express = require('express');
var router = express.Router();
var ctrlMain =  require('../controllers/main');

router.get('/', ctrlMain.index);
router.get('/dashboard', ctrlMain.dashboard);


/* GET home page. */
/*router.get('/', function(request, response, next) {
  response.render('index', { title: 'APF - Análise de Pontos de Função' });
});*/

module.exports = router;
