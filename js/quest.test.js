// задолбался собирать проект с import компилируя автоматом в require старый стандардт
import assert from 'assert';
import {initialGame, setLives} from './quest';


describe(`Game`, () => {
  describe(`Character lives`, () => {
    it(`should update level`, () => {
      assert(1,setLives(initialGame,1).lives)
    })
    // Не может быть отрицательных значений
    it(`should't allow set negative lives`, ()=> {
      const setNegativeLives = () => {
        assert.throws(setNegativeLives,-1)
      }
    })
    // Тесты зависят друг от друга поэтому
    it(`should have 3 lives on start`, () => {
      assert.equal(initialGame.lives,3)
    })
  })
})
