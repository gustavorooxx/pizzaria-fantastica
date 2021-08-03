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
		
	},
	
	busca: (req, res) => {
						   //atributo name="busca" do index.ejs	
		// res.send(req.query.busca);
		//Guardar a string buscada em uma variavel busca
		let busca = req.query.busca
		//Representar em um array "encontradas" somente as pizzas que contenham a string buscada
		let encontradas = pizzas.filter(
			p => p.nome == busca
		)
		//Retornar uma view com as pizzas enconstradas
		res.render('index', {pizzas: encontradas})
	}

}