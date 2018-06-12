//import * as actions '../actions';
import {MAKE_GUESS} from '../actions';


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
        
        return state;

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
