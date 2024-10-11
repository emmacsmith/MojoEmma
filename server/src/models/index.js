const { User } = require('./User')
const { Deck } = require('./Deck')
const { Card } = require('./Card')
const { Attack } = require('./Attack')


// import the rest of your models above

// set up the associations here

//User
User.hasOne(Deck)
Deck.belongsTo(User)

// async function findDeck(id){
//     let foundUser = await User.findByPk(id)
//     let findDeck = await foundUser.getDeck()
//     return findDeck
// }

//Deck/Card
Deck.hasMany(Card)
Card.belongsTo(Deck)

//async function addCardsToDeck(cardID, deckID){
   // let findCard = await Deck.findByPk(deckID)
   // let cardsWithDeckID = await Card.findByPk(cardID)

   // let addCardsToDeck = await findCard.addCard(cardsWithDeckID)
   // return addCardsToDeck 
//}

//Card/Attack
Card.belongsToMany(Attack, {through: "cardAttacks"})
Attack.belongsToMany(Card, {through: "cardAttacks"})

// async function addAttackToCard(attackID, cardID){
//     let findAttack = await Attack.findByPk(attackId)
//     let findCard = await Card.findByPk(cardId)

//     let addAttackToCard = await findAttack.addCard(findCard)
//     return addAttackToCard
// }
// and then export them all below
module.exports = { User, Deck, Card, Attack }
