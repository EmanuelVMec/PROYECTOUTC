// index.js
const express = require('express');
const app = express();
const PORT = 3000; // Cambia el puerto si es necesario

// Middleware para analizar JSON en las peticiones
app.use(express.json());

// Ruta básica para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
