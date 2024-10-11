const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
//const { Deck } = require('./Deck.js')
const { Deck } = require('./index.js')
const {db} = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
//need to put the values of what was created in define
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ 
    Deck: {
    name: 'Emma' , 
    xp: 8
    }
  }, {include: [Deck]})
})

// clear db after tests
afterAll(async () => await db.close())

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })
  it('Deck name and xp set correctly', async () => {
    // expect (user.Deck).toEqual({name: 'player1', xp: 42})
    expect (deck.name).toEqual('Emma')
    expect (deck.xp).toEqual(8)               //lowercase d as using the instance of Deck, not the Deck itself
  })


})
