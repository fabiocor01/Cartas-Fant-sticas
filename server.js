require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api', require('./src/routes/cardRoutes'));


app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido al Sistema de Cartas Fantásticas ',
    version: '1.0.0',
    autor: 'Fabio C.',
    endpoints: {
      cartas: {
        'GET /api/cartas': 'Listar todas las cartas',
        'GET /api/cartas/:id': 'Ver detalle de una carta',
        'POST /api/cartas': 'Crear una nueva carta',
        'PUT /api/cartas/:id': 'Actualizar una carta existente',
        'DELETE /api/cartas/:id': 'Eliminar una carta'
      },
      auxiliares: {
        'GET /api/tipos': 'Listar los tipos de carta (aire, fuego, tierra, etc.)',
        'GET /api/ciudades': 'Listar las ciudades de origen'
      }
    }
  });
});


app.use((req, res) => {
  res.status(404).json({
    exito: false,
    mensaje: 'Ruta no encontrada. Verifica la URL.'
  });
});


app.listen(PUERTO, () => {
  console.log('======================================');
  console.log(' Servidor de Cartas Fantásticas en ejecución');
  console.log(` URL base: http://localhost:${PUERTO}`);
  console.log(' Listo para recibir peticiones');
  console.log('======================================');
});
