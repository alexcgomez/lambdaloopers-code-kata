const Game = require('../src/game')


describe('Game', () => {

    let game;

    beforeEach(() => {
        game = new Game();
        jest.setMock()
    })

    test('current score should be the sum of the accumulated rolls', () => {
        const expectedCurrentScore = 5;
        game.roll(2);
        game.roll(0);
        game.roll(3);
        expect(game.currentScore).toBe(expectedCurrentScore);
    })

    test('score method should return the current score', () => {
        const expectedTotalScore = 8;
        game.roll(5);
        game.roll(3);
        expect(game.score()).toBe(expectedTotalScore)
    })

    test('should accumulate next roll score if spare',  () => {
        const expectedCurrentScore = 26;
        game.roll(2);
        game.roll(8);
        game.roll(8);
        expect(game.score()).toBe(expectedCurrentScore)
    })

})
