export const initialGame = {
  level: 0,
  lives: 3,
  time: 0
};

export const setLives = (game, lives) => {
  game.lives = lives;
  return game;
}

export const quest = {
  'level-0': {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi`,
    answers: [
      `LEFT. Вы побежите влево от гриба`,
      `RIGHT. Вы побежите прямо на гриб`,
      `JUMP. Вы прыгните вверх`
    ]
  },
  'level-1': {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi`,
    answers: [
      `LEFT. Вы побежите влево от гриба`,
      `RIGHT. Вы побежите прямо на гриб`,
      `JUMP. Вы прыгните вверх`
    ]
  },
}
