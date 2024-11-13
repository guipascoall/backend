//senha antiga mongodb: yst@Z!C4m*j6g44

//senha CERTA guipascoal: agAaF6SyqcVIxPM6
//mongodb+srv://guipascoal:<agAaF6SyqcVIxPM6>@trainee.ykuv0.mongodb.net/?retryWrites=true&w=majority&appName=trainee

//senha guippascoal: qf7y12tWL1udfWKo
//mongodb+srv://guippascoal:<qf7y12tWL1udfWKo>@trainee2.u0d5i.mongodb.net/?retryWrites=true&w=majority&appName=trainee2

const express = require("express");
const rotas = require('./routes');
const cors = require("cors");


const app = express();

app.use(express.urlencoded({extend:true}));
app.use(express.json());
app.use(cors());
app.use(rotas);
app.use("*", (req,res) => {
    res.status(404).json({message: `Rota '${req.baseUrl}' não encontrada`})
})
module.exports = app;
    