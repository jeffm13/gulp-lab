var Lab = require('lab');

var lab = exports.lab = Lab.script();
var it = lab.test;
var expect = Lab.expect;


it('should fail test', function (done) {

  console.log('\n\n');
  
  expect(true).equal(false);

  done();
});
