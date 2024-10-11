const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card, Attack } = require('./index.js')
const {db} = require('../db/config.js')

// define in global scope
let cards

// clear db and create new user before tests
//need to put the values of what was created in define
beforeAll(async () => {
  await db.sync({ force: true })
  cards = await Card.create({ 
    name: 'Fighter' , 
    mojo: 20,
    stamina: 5,
    imgUrl: 'www.example.com', 
  Attack: {
    title: 'AttacksTitle', 
    mojoCost: 5,
    staminaCost: 2
  }
  
  }, {include: [Card, Attack]})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(cards).toHaveProperty('id')
  })
  it('Card values to be set correctly', async () => {
    expect (cards.name).toEqual('Fighter')
    expect (cards.mojo).toEqual(20)               //lowercase c as using the instance of Card, not the Card itself
    expect (cards.stamina).toEqual(5)
    expect (cards.imgUrl).toEqual('www.example.com')
  })
  it('A Card can be loaded with its Attack', async () => {
    expect (cards.Attack.title).toEqual('AttacksTitle')
    expect (cards.Attack.mojoCost).toEqual(5)
    expect (cards.Attack.staminaCost).toEqual(2)
  })

})
