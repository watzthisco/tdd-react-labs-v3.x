export function selectAnswer(index,value){
    return {
        type: 'SELECT_ANSWER',
        index,
        value
    };
}
