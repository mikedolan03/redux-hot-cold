//things user can do

//look at the What? help screen
//restart the game
//guess a number / submit it

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess, feedback) => ({
    type: MAKE_GUESS,
    guess,
    feedback
});