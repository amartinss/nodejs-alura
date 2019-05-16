const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.marko(require('../views/home.marko'));
    });

    app.get('/livros', function (req, resp) {
        const livroDao = new LivroDao(db);
        
        livroDao.lista(function(error, results) {
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: results
                }
            );
        });



        // db.all('SELECT * FROM livros', function(error, results) {
        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros: results
        //         }
        //     );
        // });

        
    });
};
