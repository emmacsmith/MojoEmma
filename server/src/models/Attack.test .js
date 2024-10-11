const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
// const { User } = require('./User.js')
const { Card, Attack } = require('./index.js')        //had to change to index.js and include deck 
const {db} = require('../db/config.js')

// define in global scope
let attacks

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attacks = await Attack.create({ 
    title: 'AttacksTitle', 
    mojoCost: 5,
    staminaCost: 2
  }); 
})
// clear db after tests
afterAll(async () => await db.sync({ force: true }))

//describe makes a test suite
//each it is a test 
describe('Attack', () => {
  it('has an id', async () => {
    expect(attacks).toHaveProperty('id')
  })
  it('title is correct', async () => {
    expect(attacks.title).toBe('AttacksTitle')
  })
  it('mojoCost is correct', async () => {
    expect(attacks.mojoCost).toBe(5)
  })
  it('staminaCost is correct', async () => {
    expect(attacks.staminaCost).toBe(2)
  })
  /**
  
   * E.g. check that the username of the created user is actually gandalf
   */
})
