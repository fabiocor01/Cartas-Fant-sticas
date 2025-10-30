const { players } = require('../models/player');
const { teams } = require('../models/Team');

const playerController = {
  getAllPlayers: (req, res) => {
    try {
      const teamId = req.query.teamId ? parseInt(req.query.teamId) : null;
      const result = teamId ? players.filter(p => p.teamId === teamId) : players;
      res.json({
        success: true,
        count: result.length,
        data: result
      });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Error al obtener jugadores', error: err.message });
    }
  },


  getPlayerById: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const player = players.find(p => p.id === id);
      if (!player) return res.status(404).json({ success: false, message: 'Jugador no encontrado' });

      const team = teams.find(t => t.id === player.teamId) || null;

      res.json({
        success: true,
        data: {
          ...player,
          team: team ? { id: team.id, country: team.country, crestUrl: team.crestUrl } : null
        }
      });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Error al obtener jugador', error: err.message });
    }
  }
};

module.exports = playerController;
