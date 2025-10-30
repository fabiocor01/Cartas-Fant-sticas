class Team {
  constructor(id, country, confederation, worldCups, crestUrl) {
    this.id = id; 
    this.country = country; 
    this.confederation = confederation; 
    this.worldCups = worldCups; 
    this.crestUrl = crestUrl; 
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

const teams = [
  new Team(1, 'Argentina', 'CONMEBOL', 3, 'https://example.com/escudos/argentina.png'),
  new Team(2, 'Brasil', 'CONMEBOL', 5, 'https://example.com/escudos/brasil.png'),
  new Team(3, 'España', 'UEFA', 1, 'https://example.com/escudos/espana.png'),
  new Team(4, 'México', 'CONCACAF', 0, 'https://example.com/escudos/mexico.png'),
  new Team(5, 'Estados Unidos', 'CONCACAF', 0, 'https://example.com/escudos/usa.png')
];

module.exports = { Team, teams };
