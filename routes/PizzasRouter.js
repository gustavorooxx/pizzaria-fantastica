var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);

// rota para "Ver mais" das pizzas

router.get('/pizzas/:id', PizzasController.show)

module.exports = router;
