// // Указываем стиль описания тестов -BDD или TDD
const assert = require('chai').assert
describe(`Javascript Language`, () => {
  it(`should check that null is not defined` , () => {
    // Проверка на строго не равно
    assert.notStrictEqual(null, undefined)
  })

  it(`should check equal arrays`, () => {
    // Проверить два массива deep глубокая проверка (содержимое каждого массива равно чему ожидали)
    // Проверка одинаковости по знацениям если будет разная длина массива будет ошибка
    assert.deepEqual([1,2,3], [1,2,3])
  })
  it(`should sum 0.1 and 0.2`, () => {
     // В js 0.1+0.2 Приблизительно равно 0.3
    assert.ok(0.1+0.2 - 0.3 < 0.30000000000000004)
  })
})
