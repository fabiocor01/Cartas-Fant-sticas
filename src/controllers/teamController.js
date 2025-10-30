const { teams } = require('../models/Team');
const { players } = require('../models/player');

const teamController = {
  
  getAllTeams: (req, res) => {
    try {
      res.json({
        success: true,
        count: teams.length,
        data: teams
      });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Error al obtener selecciones', error: err.message });
    }
  },

  
  getTeamById: (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const team = teams.find(t => t.id === id);
      if (!team) return res.status(404).json({ success: false, message: 'Selección no encontrada' });

      
      const teamPlayers = players.filter(p => p.teamId === id);

      res.json({
        success: true,
        data: {
          ...team,
          players: teamPlayers
        }
      });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Error al obtener la selección', error: err.message });
    }
  }
};

module.exports = teamController;
