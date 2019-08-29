
const initState ={
    x:0,
    y:0
}


export default function reducer(state =initState, action){
    // return state
    switch (action.type) {
        case 'increment_Y':
            return {...state, y: state.y +1};
        case 'increment_X':
            return{...state, x: state.x +1};

        default: return state;
            
    }

}