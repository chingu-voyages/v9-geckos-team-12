import * as actionTypes from '../actions/formActions'

const initialState = {
    signIn: true,
    signUp: false
}





const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGN_IN : {
            return {
                ...state,
                signIn: !state.signIn
            }
        }

        case actionTypes.SIGN_UP: {
            return {
                ...state,
                signUp: true,
                signIn: false
            }
        }
        default: return state
            
        
    }
}


export default formReducer