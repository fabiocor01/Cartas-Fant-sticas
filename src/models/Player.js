class Player {
  constructor(id, name, age, teamId, imageUrl, dribbling, speed, control, passing, shooting) {
    this.id = id; 
    this.name = name;
    this.age = age;
    this.teamId = teamId; 
    this.imageUrl = imageUrl;
    this.dribbling = dribbling || 50;
    this.speed = speed || 50;
    this.control = control || 50;
    this.passing = passing || 50;
    this.shooting = shooting || 50;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}


const players = [
  new Player(1, 'Lionel Messi', 37, 1, 'https://example.com/jugadores/messi.png', 96, 80, 95, 92, 94),
  new Player(2, 'Ángel Di María', 36, 1, 'https://example.com/jugadores/dimaria.png', 88, 82, 86, 84, 78),
  new Player(3, 'Neymar Jr', 32, 2, 'https://example.com/jugadores/neymar.png', 94, 86, 91, 85, 87),
  new Player(4, 'Pedri', 22, 3, 'https://example.com/jugadores/pedri.png', 90, 78, 89, 88, 70),
  new Player(5, 'Hirving Lozano', 29, 4, 'https://example.com/jugadores/lozano.png', 82, 91, 80, 74, 79),
  new Player(6, 'Christian Pulisic', 26, 5, 'https://example.com/jugadores/pulisic.png', 85, 86, 82, 80, 78)
];

module.exports = { Player, players };
