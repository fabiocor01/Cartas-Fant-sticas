const { cards } = require('../models/Card');
const cardTypes = require('../models/CardType');
const cities = require('../models/City');

class DataStore {
  constructor() {
    
    this.cards = cards;
    this.cardTypes = cardTypes;
    this.cities = cities;
  }

  
  getAllCards() {
    return this.cards.map(card => {
      const type = this.cardTypes.find(t => t.id === card.typeId);
      const city = this.cities.find(c => c.id === card.cityId);

      return {
        ...card,
        tipo: type ? type.name : 'Desconocido',
        ciudad: city ? city.name : 'Desconocida'
      };
    });
  }


  getCardById(id) {
    const card = this.cards.find(c => c.id === id);
    if (!card) return null;

    const type = this.cardTypes.find(t => t.id === card.typeId);
    const city = this.cities.find(c => c.id === card.cityId);

    return {
      ...card,
      tipo: type ? type.name : 'Desconocido',
      detallesTipo: type,
      ciudad: city ? city.name : 'Desconocida',
      detallesCiudad: city
    };
  }


  createCard(cardData) {
    const { Card } = require('../models/Card');
    const nuevaCarta = new Card(
      cardData.name,
      cardData.typeId,
      cardData.powerLevel,
      cardData.cityId,
      cardData.imageUrl
    );

    this.cards.push(nuevaCarta);
    return nuevaCarta;
  }


  updateCard(id, cardData) {
    const index = this.cards.findIndex(c => c.id === id);
    if (index === -1) return null;

    this.cards[index] = {
      ...this.cards[index],
      ...cardData,
      updatedAt: new Date()
    };

    return this.cards[index];
  }


  deleteCard(id) {
    const index = this.cards.findIndex(c => c.id === id);
    if (index === -1) return false;

    this.cards.splice(index, 1);
    return true;
  }


  getAllCardTypes() {
    return this.cardTypes;
  }


  getAllCities() {
    return this.cities;
  }
}

module.exports = new DataStore();
