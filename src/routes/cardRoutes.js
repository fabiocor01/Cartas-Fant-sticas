const express = require('express');
const router = express.Router();
const cartaController = require('../controllers/cardController');

router.get('/cartas', cartaController.obtenerCartas);
router.get('/cartas/:id', cartaController.obtenerCartaPorId);
router.post('/cartas', cartaController.crearCarta);
router.put('/cartas/:id', cartaController.actualizarCarta);
router.delete('/cartas/:id', cartaController.eliminarCarta);


router.get('/tipos', cartaController.obtenerTipos);
router.get('/ciudades', cartaController.obtenerCiudades);


module.exports = router;
