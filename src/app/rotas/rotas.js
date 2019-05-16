module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.send('NodeJs rodando com Express');
    });

    app.get('/livros', function (req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        );
    });
};
