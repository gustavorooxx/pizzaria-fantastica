const pizzas = require('../database/Pizzas.json')

module.exports = {
	index: (req, res) => {
		res.render("index", {pizzas});
	},

	show: (req, res) => {

		// 1- carregar a pizza de id passado (pizzas.find)
		var pizza = req.params.id;
		// 2- Renderizar a view pizza passando a pizza encontrada
		res.render("pizza", {pizza} )
		
	}
}