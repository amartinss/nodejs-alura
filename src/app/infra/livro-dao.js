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
}

module.exports = LivroDao;