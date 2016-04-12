import chai from 'chai'
import Greeting from '../src/Greeting'

chai.expect()
const expect = chai.expect

let greeting

describe('Given a instance of Getting', () => {
  before(() => {
    greeting = new Greeting()
    greeting.hello()
  })

  describe('When I need print of "hello() function"', () => {
    it('Should return "Hello world!"', () => {
      const content = greeting.hello()
      expect(content).to.be.equal('Hello world!')
    })
  })
})
