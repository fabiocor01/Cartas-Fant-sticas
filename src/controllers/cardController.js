const db = require('../data/database');

const cartaController = {

  
  obtenerCartas: (req, res) => {
    try {
      const cartas = db.getAllCards();
      res.json({
        exito: true,
        cantidad: cartas.length,
        datos: cartas
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'Hubo un error al listar las cartas.',
        error: error.message
      });
    }
  },

  
  obtenerCartaPorId: (req, res) => {
    try {
      const carta = db.getCardById(req.params.id);

      if (!carta) {
        return res.status(404).json({
          exito: false,
          mensaje: 'Carta no encontrada.'
        });
      }

      res.json({
        exito: true,
        datos: carta
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'Error al buscar la carta.',
        error: error.message
      });
    }
  },

  
  crearCarta: (req, res) => {
    try {
      const { name, typeId, powerLevel, cityId, imageUrl } = req.body;

      
      if (!name || !typeId || !powerLevel || !cityId) {
        return res.status(400).json({
          exito: false,
          mensaje: 'Faltan datos obligatorios: name, typeId, powerLevel, cityId'
        });
      }

      const nuevaCarta = db.createCard({
        name,
        typeId: parseInt(typeId),
        powerLevel: parseInt(powerLevel),
        cityId: parseInt(cityId),
        imageUrl: imageUrl || 'https://miweb.com/imagenes/default-card.jpg'
      });

      res.status(201).json({
        exito: true,
        mensaje: 'Carta creada con éxito ',
        datos: nuevaCarta
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'No se pudo crear la carta.',
        error: error.message
      });
    }
  },

  
  actualizarCarta: (req, res) => {
    try {
      const cartaActualizada = db.updateCard(req.params.id, req.body);

      if (!cartaActualizada) {
        return res.status(404).json({
          exito: false,
          mensaje: 'No se encontró la carta solicitada.'
        });
      }

      res.json({
        exito: true,
        mensaje: 'Carta actualizada correctamente ',
        datos: cartaActualizada
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'Error al actualizar la carta.',
        error: error.message
      });
    }
  },


  eliminarCarta: (req, res) => {
    try {
      const eliminada = db.deleteCard(req.params.id);

      if (!eliminada) {
        return res.status(404).json({
          exito: false,
          mensaje: 'Carta no encontrada.'
        });
      }

      res.json({
        exito: true,
        mensaje: 'Carta eliminada exitosamente '
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'Error al eliminar la carta.',
        error: error.message
      });
    }
  },


  obtenerTipos: (req, res) => {
    try {
      const tipos = db.getAllCardTypes();
      res.json({
        exito: true,
        datos: tipos
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'Error al obtener los tipos de carta.',
        error: error.message
      });
    }
  },


  obtenerCiudades: (req, res) => {
    try {
      const ciudades = db.getAllCities();
      res.json({
        exito: true,
        datos: ciudades
      });
    } catch (error) {
      res.status(500).json({
        exito: false,
        mensaje: 'Error al obtener las ciudades.',
        error: error.message
      });
    }
  }
};

module.exports = cartaController;
