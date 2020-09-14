// export default (state = [], action) => {
//     if (action.type === 'FETCH_POSTS') {
//         return [...state,action.payload];
//     }

//     return state;
// }

//It is common to see switch statements in reducers as they are more syntactically friendly for many cases.

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }   
}