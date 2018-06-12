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

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME
});

export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK';
export const changeFeedback = (feedback) => ({
    type: CHANGE_FEEDBACK,
    feedback
});

export const CHANGE_AURAL = 'CHANGE_AURAL';
export const changeAural = (auralStatus) => ({
    type: CHANGE_AURAL,
    auralStatus
});