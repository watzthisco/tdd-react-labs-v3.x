function checkedValue(state = [], action) {
    console.log(state, action);
    switch (action.type) {
        case 'SELECT_ANSWER':
            return state
                .slice(0, action.index)
                .concat([action.value])
                .concat(state.slice(action.index + 1));
        default:
            return state;
    }
}

export default checkedValue;
