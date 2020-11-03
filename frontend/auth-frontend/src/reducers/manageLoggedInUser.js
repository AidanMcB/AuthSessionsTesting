export default function manageLoggedInUsers( 
    state={loggedInStatus: "NOT_LOGGED_IN", 
    user: {}, 
    requesting: false }, 
    action) {

    switch (action.type) {
        case 'RENDER_PRODUCTS':
            return {
                ...state, products: action.payload,
                requesting: false
            }
        case 'FETCH_COMMENTS':
            return {
                ...state, comments: action.payload,
                requesting: false
            }
        case 'ADD_COMMENT':
            return {
                ...state, comments: [...state.comments, action.payload]
            }
        default:
            return state
    }
};