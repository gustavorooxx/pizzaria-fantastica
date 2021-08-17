module.exports = (req,res,next) => {
    // Console mostrando a pizza da vez
    console.log("pizza da vez: " + req.params.id)
    let idPizzaDaVez =  req.params.id;

    if(!req.cookies.visitadas){
        // Responde criando cookie e mostrando a primeira pizza visitada 
        res.cookie('visitadas', idPizzaDaVez)
        console.log("Primeira pizza visitada: " + idPizzaDaVez)
    } else {
        console.log("Pizzas já visitadas: " + req.cookies.visitadas)
        res.cookie('visitadas', `${req.cookies.visitadas},${idPizzaDaVez}`)
    }

 
    
    next();
}