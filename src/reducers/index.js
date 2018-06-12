//import * as actions '../actions';
import {MAKE_GUESS, NEW_GAME, CHANGE_FEEDBACK, CHANGE_AURAL} from '../actions';


const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };

 export const gameReducer = (state=initialState, action) => {

 	if(action.type === MAKE_GUESS) {
 		return Object.assign({}, state, {
 			guesses: [...state.guesses, action.guess],
 			feedback: action.feedback 
 		});
 	} else { 

        if(action.type === NEW_GAME) {

            return Object.assign({}, state, {
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: Math.floor(Math.random() * 100) + 1
            });

        } else {

                 if(action.type === CHANGE_FEEDBACK) {

                    return Object.assign({}, state, {
                    feedback: action.feedback
                    });

                    } else {

                                if(action.type === CHANGE_AURAL) {

                                return Object.assign({}, state, {
                                auralStatus: action.auralStatus
                                });

                                } else {
                    
                                return state;
                                }
                            }
                }

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
