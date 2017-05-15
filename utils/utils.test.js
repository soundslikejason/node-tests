const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`);
  // }
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});


it('should square a number', () => {
  var res = utils.square(8);
  
  expect(res).toBe(64).toBeA('number');
  // if (res !== 64) {
  //   throw new Error(`Expected 64, but got ${res}.`);
  // }
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (square) => {
    expect(square).toBe(25).toBeA('number');
    done();
  });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {
    age: 55,
    location: 'San Antonio'
  };
  
  var res = utils.setName(user, 'Billy Dean');
  
  expect(res).toBe(user).toInclude({
    firstName: 'Billy',
    lastName: 'Dean'
  }).toBeA('object');
});


// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'jason'}).toNotEqual({name: 'Jason'});
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Judy',
//     age: 24,
//     location: 'Seattle'
//   }).toExclude({
//     age: 27
//   });
// });