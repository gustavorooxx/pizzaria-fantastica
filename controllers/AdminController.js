const e = require('express');
const usuarios = require('../database/Usuarios.json')

module.exports = {
    showLogin: (req, res) => {
        res.render("admin/login")
    },

    login: (req, res) => {

        //Capturar o email e senha enviados pelo cliente

        //sem desconstrução
        var campoEmail = req.body.email;
        var campoSenha = req.body.senha;

        //com desconstrução
        // const {email, senha} = req.body

        //Buscar no array de usuários um usuário que tenha email igual ao fornecido
        const usuario = usuarios.find(e => e.email == campoEmail && e.senha == campoSenha)
        
        // const emailExiste = usuarios.find(s => s.email == campoEmail)
        // const senhaExiste = usuarios.find(s => s.senha == campoSenha)

        if(!usuario){
            return res.redirect('/admin/login?err=1')
        } else { 

            //configurando a session do usuario
            req.session.usuario = {nome: usuario.nome, email: usuario.email}

    
            return res.redirect("/admin/home");
        }
        
    },

    showHome: (req, res) =>{
        res.render("admin/home")
    }
}