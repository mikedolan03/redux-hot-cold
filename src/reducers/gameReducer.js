import * as actions '../actions';

const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };

 export default const gameReducer = (state=initialState, action) => {

 	if(action.type === actions.MAKE_GUESS) {
 		return Object.assign({}, state, {
 			guesses: [...state.guesses, {action.guess}],
 			feedback: action.feedback 
 		});
 	}

 }

 /*   export const trelloReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                cards: []
            }]
        });
    }
    else if (action.type === actions.ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};
*/
