const categorias = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('SELECT * FROM categorias', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject);
            return false;
          }
          resolve({ categorias: results });
        })
      })
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('INSERT INTO categorias (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar a categoria ${name}`, reject);
            return false;
          }
          resolve({ categoria: { name, id: results.insertId } });
        })
      })
    },
    update: (id, name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('UPDATE categorias SET name = ? WHERE id = ?', [name, id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao atualizar a categoria ${name}`, reject);
            return false;
          }
          resolve({ categoria: { name, id }, affectedRows: results.affectedRows });
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('DELETE FROM categorias WHERE id = ?', [id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao remover a categoria de id ${id}`, reject);
            return false;
          }
          resolve({ message: 'Categoria removida com sucesso!', affectedRows: results.affectedRows });
        })
      })
    }
  }
}

module.exports = categorias;
