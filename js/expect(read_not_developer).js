// Говорим программе что хотим для не программистов более читателен и понятен
const expect = require('chai').expect
describe(`Javascript Language`, () => {
  it(`string should not be equal to number` , () => {
    // Проверка на строго не равно
    expect(`42`).to.not.equal(42)
  })

  it(`should be an array without 3`, () => {
    // Массив не должен содержать 3
    expect([1,2]).to.be.an(`array`).that.does.not.include(3)
  })
  it(`should't have property 'b'`, () => {
     // Не содержит свойство b
    expect({a:1}).to.not.have.property(`b`)
  })
})
