export const actionType = {
    SET_USER : "SET_USER"
};

const reducer = (state, action) =>{
  clg
    switch (action.type) {
        case actionType.SET_USER:
          return {
            ...state,
            user: action.user,
          };
          
            default : 
            return state;
    }
}

export default reducer;