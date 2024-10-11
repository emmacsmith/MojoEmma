const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
// const { User } = require('./User.js')
const { User, Deck } = require('./index.js')        //had to change to index.js and include deck 
const {db} = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ 
    username: 'gandalf', 
    Deck: {
      name: 'player1', 
      xp: 42
    } 
  }, {include: [Deck]});        //tells the test to use the model deck
})
// clear db after tests
afterAll(async () => await db.close())

//describe makes a test suite
//each it is a test 
describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
  it('Username is correct', async () => {
    expect(user.username).toBe('gandalf')
  })
  it('A User can be loaded with its Deck', async () => {
    // expect (user.Deck).toEqual({name: 'player1', xp: 42})
    expect (user.Deck.name).toEqual('player1')
    expect (user.Deck.xp).toEqual(42)
  })
  /**
  
   * E.g. check that the username of the created user is actually gandalf
   */
})
