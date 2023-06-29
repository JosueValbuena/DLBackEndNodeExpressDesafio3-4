const { pool } = require('./conexion');

const getPost = async () => {
    const resultado = await pool.query('SELECT * FROM posts ORDER BY id');
    console.log(resultado.rows);
    return (resultado.rows);
}

const addPost = async (titulo, img, descripcion, likes) => {
    const consulta = 'INSERT INTO posts VALUES(DEFAULT, $1, $2, $3, $4)';
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(consulta, values);
    console.log('datos agregados exitosamente');
}

const modifyPost = async (id) => {
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
    const values = [id];
    const { rows } = await pool.query(consulta, values);
    return rows;
}

const deletePost = async (id) => {
    const consulta = "DELETE FROM posts WHERE id = $1";
    const values = [id];
    const result = await pool.query(consulta, values);
}

module.exports = {
    getPost,
    addPost,
    modifyPost,
    deletePost
};