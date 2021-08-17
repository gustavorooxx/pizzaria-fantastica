const pizzas = require('../database/Pizzas.json')
const fs = require('fs');
const path = require('path');


module.exports = {
	index: (req, res) => {
		res.render("index", {pizzas});
	},
	// Pega o id da pizza pra visualizar uma unica pizza em pizzas/:id
	show: (req, res) => {

		// 1- carregar a pizza de id passado (pizzas.find)
		var pizza = req.params.id;
		// 2- Renderizar a view pizza passando a pizza encontrada
		//finalizar********
		res.render("pizza", {pizza} ) 
		
		
	},
	// Busca do form de pesquisa do index.js que envia pra uma rota/busca
	busca: (req, res) => {
						   //atributo name="busca" do index.ejs	
		// res.send(req.query.busca);
		//Guardar a string buscada em uma variavel busca
		var busca = req.query.busca;
		//Representar em um array "encontradas" somente as pizzas que contenham a string buscada
		//usar x.includes
		var encontradas = pizzas.filter(
			p => p.nome.toLowerCase().includes(busca.toLowerCase())
			
			);
		
		//Retornar uma view com as pizzas enconstradas
		res.render('index', {pizzas: encontradas});
	},
	//renderizar pagina /pizza/create
	create: (req, res) => {
		res.render('pizza-create')
	},

	store: (req, res) => {
		var pizza = {
			id:pizzas[pizzas.length -1].id + 1, //tamanho do array de pizzas -1 
												// + 1 pra pegar ultimo numero do id da lista
			nome:req.body.nome,
			ingredientes: req.body.ingredientes.split(","),
			preco: Number(req.body.preco),
			img:"/img/" + req.file.filename,
			destaque:true
		}
		//adicionar obj no array de pizzas
		pizzas.push(pizza);

		//salvando array em Pizzas.json
		//utilizando File System (manipular arquivos dentro do computador) 
		//com o metodo writeFileSync que recebe o caminho ao qual o arquivo sera salvo atraves de path.join
		// e os dados que serão salvos, neste caso convertidos para JSON
		fs.writeFileSync(path.join(__dirname,"../database/Pizzas.json"), JSON.stringify(pizzas,null,1));
		//retorno pro index exibir a nova pizza
		//Redireciona o usuário para a rota a raíz
		res.redirect("/");
	}

	//Operações que fazemos na manipulação dos dados.

	//C = Crate (Criar)
	//R = Read (Ler)
	//U = Update (Atualizar)
	//D = Delete (Deletar)
}