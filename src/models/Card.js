const { v4: uuidv4 } = require('uuid');


class Card {
  constructor(name, typeId, powerLevel, cityId, imageUrl) {
    this.id = uuidv4();
    this.name = name;
    this.typeId = typeId;
    this.powerLevel = powerLevel;
    this.cityId = cityId;
    this.imageUrl = imageUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}


let cards = [
  new Card(
    'Mago del Trueno',
    1,
    93,
    1,
    'https://miapi.com/imagenes/mago-trueno.jpg'
  ),

  new Card(
    'Titan de Piedra',
    2,
    88,
    3,
    'https://miapi.com/imagenes/titan-piedra.jpg'
  ),

  new Card(
    'Fénix Carmesí',
    3,
    96,
    2,
    'https://miapi.com/imagenes/fenix-carmesi.jpg'
  ),

  new Card(
    'Reina del Océano',
    4,
    85,
    4,
    'https://miapi.com/imagenes/reina-oceano.jpg'
  ),

  new Card(
    'Guardián de la Luz',
    5,
    92,
    5,
    'https://miapi.com/imagenes/guardian-luz.jpg'
  ),

  new Card(
    'Sombra Eterna',
    6,
    89,
    6,
    'https://miapi.com/imagenes/sombra-eterna.jpg'
  ),

  new Card(
    'Maestro del Viento',
    1,
    83,
    5,
    'https://miapi.com/imagenes/maestro-viento.jpg'
  ),

  new Card(
    'Ángel del Amanecer',
    5,
    94,
    1,
    'https://miapi.com/imagenes/angel-amanecer.jpg'
  ),

  new Card(
    'Bestia de Fuego',
    3,
    90,
    2,
    'https://miapi.com/imagenes/bestia-fuego.jpg'
  ),

  new Card(
    'Espíritu del Bosque',
    2,
    80,
    3,
    'https://miapi.com/imagenes/espiritu-bosque.jpg'
  ),

  new Card(
    'Kraken del Abismo',
    4,
    87,
    4,
    'https://miapi.com/imagenes/kraken-abismo.jpg'
  ),

  new Card(
    'Gólem de Acero',
    2,
    86,
    6,
    'https://miapi.com/imagenes/golem-acero.jpg'
  )
];

module.exports = { Card, cards };
