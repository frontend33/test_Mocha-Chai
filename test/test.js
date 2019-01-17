// // Указываем стиль описания тестов -BDD или TDD
// mocha.setup(`bdd`);



// // Запуск теста
// mocha.run()
// Что бы не дублировать не повторять похожий код мы создаем функцию


/* Чтобы разобраться в случаях когда возникают ошибки, увидеть что именно сломалось передаем два параметра

const equals = (expected, actual) => {
  if (expected !== actual) {
    throw  new Error(`Expected: ${expected} , not equal to ${actual}`)
  }
}
const notEquals = (expected, actual) => {
  if (expected === actual) {
    throw  new Error(`Expected: ${expected} , not equal to ${actual}`)
  }
}

*/

const sum = (left, right) => left + right;

const assert = require('chai').assert
/* выведет ошибку
const sum = (left, right) => left + right +1;
*/
// Что бы написать тест пишем спец конструкцию describe (1 параметром что тестируем, вторым что запустить внутри теста)
describe(`3rd Grade Match`, () => {
// Внутри describe описываем все тестовые сценарии которые будем использовать  метод it (1 описание, 2 тело теста)
    // Написали тест который показывает что правильно суммируется
    it(`should sum and two correctly`, () => {
      assert.equal(sum(2, 2), 4)
      // 2 +3 Это не 4
      assert.notEqual(sum(2, 3), 4)
    })
      //Тест на складывание отрицательных чисел
    it(`should sum negative numbers correctly`, () => {
      assert.equal(sum(-1, -1), -2)
      assert.equal(sum(-1, -2), -3)
    })
    it(`should sum negative and possitive numbers correctly`, () => {
      assert.equal(sum(-1, 2), 1)
      assert.equal(sum(-1, 1), 0)
    })


})

