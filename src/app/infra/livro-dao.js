class LivroDao {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (error, results) => {
                    if (error) 
                        return reject("Não foi possivel listar os livros");
            
                    return resolve(results);
                }
            )
        });
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(
                "INSERT INTO LIVROS (titulo, preco, descricao) VALUES (?, ?, ?)",
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }
    
                    resolve();
                } 
            )
        });
    }
}

module.exports = LivroDao;