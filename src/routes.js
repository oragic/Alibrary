const express = require('express');
const routes = express.Router();
const views = __dirname + "/views/"


const books = {

    data:[{

    title: "Harry Potter",
    description: "Excelente Livro",
    image: "foto",
    state: "Lido",
    nota: 10

}],

    controllers:{
        index(req, res){
            const vieweBooks = books.data.map((book)=>{
                return{
                    ...book
                };
            });
            res.json({ vieweBooks });
        },

        create(req,res){
            books.data.push({

                title: req.body.title,
                description: req.body.description,
                image: req.body.image,
                state: req.body.state,
                nota: req.body.nota
        });

            res.redirect('/');

        }

    }

}

routes.get('/', books.controllers.index);
/*routes.post('/adicionar/books', (req, res) =>{
    books.push({
        title: req.body.title       
    });

    return res.redirect('/');
});*/

routes.post('/books/create', books.controllers.create);


module.exports = routes;