// Тест TDD
// Файл email-validator.js
const AT_SIGN = `@`
const EMAIL_REGEXP= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яА_Я\-0-9]+\.)+[a-zA-Zа-яА_Я]{2,}))$/;
const isValidEmail = (candidate) => {
  return EMAIL_REGEXP.test(candidate)
};
const assert = require('chai').assert
describe(`Email validator`, () => {

  it(`should allow to enter my email `, () =>{
    assert.ok(isValidEmail(`frontend@google.com`))
    assert(isValidEmail(`test@yandex.ru`));
    assert(isValidEmail(`frontend@rambler.ru`))
    assert(isValidEmail(`a@1.ru`))
    assert(isValidEmail(`русский@почта.рус`))
  })
  // Проверили все случаи с true проверяем не валидные случаи
  it(`should not allow to enter name`, () => {
    assert(!isValidEmail(`Вася`))
    assert(!isValidEmail(`@email`))
    assert(!isValidEmail(`@email@`))
    assert(!isValidEmail(`@`))
    assert(!isValidEmail(`email@localhost`))
  })
  // После проверки хороших и плохих случаев проверяем случаи когда нас пытаются сломать
  it(`should deal with corner cases correctly`, () => {
    assert(!isValidEmail(``))
    assert(!isValidEmail(null))
    assert(!isValidEmail(undefined))
  })
  it(`should deal with invalid data`, () => {
    assert(!isValidEmail(0))
    assert(!isValidEmail(0))
    assert(!isValidEmail(true))
    assert(!isValidEmail({}))
    assert(!isValidEmail([]))
  })

})
