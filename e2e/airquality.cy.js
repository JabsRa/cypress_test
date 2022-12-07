const { expect } = require('chai');

describe('empty spec', () => {
  // const getuser = require('../fixtures/getuser')

let token = '82a07d0c205c4a168e67873376feb490';

  it('GET', () => {


    cy.request({
      method: 'GET',
      url: 'https://api.weatherbit.io/v2.0/forecast/hourly?postal_code=28546&key=' + token

    }).then((res) => {
      cy.log(JSON.stringify(res.body))
    });
  });
});