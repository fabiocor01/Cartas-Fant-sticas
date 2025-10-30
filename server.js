require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PUERTO = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api', require('./src/routes/cardRoutes'));


app.use('/api/panini', require('./src/routes/teamRoutes'));
app.use('/api/panini', require('./src/routes/playerRoutes'));


app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido al servidor de APIs combinadas',
    version: '1.0.0',
    autor: 'Fabio C.',
    apis_disponibles: {
      cartas_fantasticas: {
        base_url: '/api/cartas',
        descripcion: 'Sistema de cartas mágicas estilo Yu-Gi-Oh o Magic',
        endpoints: {
          'GET /api/cartas': 'Listar todas las cartas',
          'GET /api/cartas/:id': 'Ver detalle de una carta',
          'POST /api/cartas': 'Crear una nueva carta',
          'PUT /api/cartas/:id': 'Actualizar una carta existente',
          'DELETE /api/cartas/:id': 'Eliminar una carta',
          auxiliares: {
            'GET /api/tipos': 'Listar los tipos de carta',
            'GET /api/ciudades': 'Listar las ciudades de origen'
          }
        }
      },
      album_panini_2026: {
        base_url: '/api/panini',
        descripcion: 'API del álbum Panini Digital - Mundial 2026',
        endpoints: {
          equipos: {
            'GET /api/panini/teams': 'Listar todas las selecciones nacionales',
            'GET /api/panini/teams/:id': 'Ver detalle de una selección (con jugadores)'
          },
          jugadores: {
            'GET /api/panini/players': 'Listar todos los jugadores (puede filtrar por teamId)',
            'GET /api/panini/players/:id': 'Ver detalle de un jugador'
          }
        }
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
  console.log(' Servidor de APIs en ejecución');
  console.log(` URL base: http://localhost:${PUERTO}`);
  console.log(' APIs disponibles:');
  console.log('  -  Cartas Fantásticas → /api/cartas');
  console.log('  -  Álbum Panini 2026    → /api/panini');
  console.log('======================================');
});
