var express = require('express');
var bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

var app = express();
var db;

app.use(express.static(__dirname + '/public'));

async function conecta() {
    var client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    db = client.db('Restaurante');
}

app.get('/categorias', async (req, res) => {
    try {
        var categorias = db.collection('Categorias');
        const categoriasItens = await categorias.find().toArray();
        const categoriasNomes = categoriasItens.map(categoria => categoria.nome);
        res.send(categoriasNomes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar categorias.');
    }
});

app.get('/principais', async (req, res) => {
    try {
        const principais = db.collection('Principais');
        const principaisItens = await principais.find({}).toArray();
        const principaisData = principaisItens.map(principal => {
            const { _id, ...rest } = principal;
            return rest;
        });
        res.send(principaisData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar pratos principais.');
    }
});

app.get('/entradas', async (req, res) => {
    try {
        const entradas = db.collection('Entradas');
        const entradasItens = await entradas.find({}).toArray();
        const entradasData = entradasItens.map(entrada => {
            const { _id, ...rest } = entrada;
            return rest;
        })
        res.send(entradasData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar entradas.');
    }
});

app.get('/porcoes', async (req, res) => {
    try {
        const porcoes = db.collection('Porcoes');
        const porcoesItens = await porcoes.find({}).toArray();
        const porcoesData = porcoesItens.map(porcao => {
            const { _id, ...rest } = porcao;
            return rest;
        })
        res.send(porcoesData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar porções.');
    }
});

app.get('/bebidas', async (req, res) => {
    try {
        const bebidas = db.collection("Bebidas");
        const bebidasItens = await bebidas.find({}).toArray();
        const bebidasData = bebidasItens.map(bebida => {
            const { _id, ...rest } = bebida;
            return rest;
        })
        res.send(bebidasData)
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao buscar bebidas.')
    }
});

app.get('/sobremesas', async (req, res) => {
    try {
        const sobremesas = db.collection('Sobremesas');
        const sobremesasItens = await sobremesas.find({}).toArray();
        const sobremesasData = sobremesasItens.map(sobremesa => {
            const { _id, ...rest } = sobremesa;
            return rest;
        })
        res.send(sobremesasData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar sobremesas.');
    }
});

app.get('/:categoria/:nome', async (req, res) => {
    try {
        var categoria = req.params.categoria;
        var nome = req.params.nome;
        var collection = db.collection(categoria);
        const item = await collection.findOne({ nome: nome });
        const { _id, imagem, ...rest} = item; 
        console.log(rest)
        res.send(rest);
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao buscar item.');
    }
})

app.use((req, res) => {
    res.status(404).send('Rota não encontrada.');
});

app.listen(4000, async () => {
    console.log("Servidor rodando na porta 4000");
    await conecta();
})


