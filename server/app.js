const express = require("express");
const cors = require("cors");
const { getPost, addPost, modifyPost, deletePost } = require("./consulta");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


require('dotenv').config()

app.get("/", async (req, res) => {
    try {
        res.send("hola desde express")
    } catch (error) {
        console.log(error)
    }
})

app.get("/posts", async (req, res) => {
    try {
        const result = await getPost();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.post("/posts", async (req, res) => {
    try {
        const { titulo, imgSrc, descripcion, likes } = req.body;
        const result = await addPost(titulo, imgSrc, descripcion, likes);
        res.send('post agregado');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.put("/posts/like/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await modifyPost(id)
        res.send("post modificado correctamente");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await deletePost(id);
        res.send("post eliminado correctamente");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.listen(PORT, console.log(`servidor inciado correctamente en el servidor ${PORT}`));