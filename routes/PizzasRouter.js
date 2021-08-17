var express = require('express');
var router = express.Router();
const SalvaVisitadasMiddleware = require('../middlewares/SalvaVisitadasMiddleware')

const PizzasController = require('../controllers/PizzasController');
const path = require('path');
const multer = require('multer');

//Configurando o multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, file.originalname);  } 
  });

  const uploadFile = multer({ storage: storage });

/* GET home page. */
router.get('/', PizzasController.index);

// rota para "Ver mais" das pizzas
router.get('/pizzas/:id', SalvaVisitadasMiddleware, PizzasController.show)

// rota para /busca
router.get('/busca', PizzasController.busca )

//rota para formulario de adicionar pizza
router.get('/pizza/create', PizzasController.create)

//rota para criar post do formulario de adicionar pizza (C do Crud =  Create)
// router.post('/pizza/create', PizzasController.store)
router.post('/pizza/create', uploadFile.single('img'),PizzasController.store)

module.exports = router;
