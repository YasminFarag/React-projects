const initState ={
    x:0,
    y:0

}

function reducer (state = initState, action){
       switch (action.type) {
           case 'incrementy':
               return{...state, y:state.y +1}
            case 'incrementx' :
                return{...state, x:state.x +1}
             
       
           default: return state
               
       }

}

export default reducer