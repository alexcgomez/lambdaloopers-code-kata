const Game = require('../src/game')

const game = new Game();

test('current score should be the sum of the accumulated rolls', () => {
    const expectedCurrentScore = 5;
    game.roll(2);
    game.roll(0);
    game.roll(3);
    expect(game.currentScore).toBe(expectedCurrentScore);
})
