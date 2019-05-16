class LivroDao {
    constructor(db) {
        this._db = db;
    }

    lista(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (error, results) => 
                callback(error, results)
        )
    }
}

module.exports = LivroDao;