const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_COMMENTS':
            return [...action.comments];
        case 'ADD_COMMENT':
            return [...state, action.comments];
        case 'EDIT_COMMENT':
            return state.map(c => c._id === action.comments._id ? { ...c, text: action.comments.text } : c)
        default:
            return state;
    };
};

export default reducer;