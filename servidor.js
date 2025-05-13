const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.get('/hora', (req, res) => {
    const hora = new Date();
    const horaFormateada = hora.toLocaleTimeString();
    res.json({hora: horaFormateada});
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});