const { expect } = require('chai');

describe('empty spec', () => {
  // const getuser = require('../fixtures/getuser')

let token = '82a07d0c205c4a168e67873376feb490';

  it('GET', () => {


    cy.request({
      method: 'GET',
      url: 'https://api.weatherbit.io/v2.0/current?lat=40.730610&lon=-73.935242&key=' + token

    }).then((res) => {
      cy.log(JSON.stringify(res.body))
    });
  });
});