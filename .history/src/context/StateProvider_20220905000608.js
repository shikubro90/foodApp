import {createContext, useContext, useReducer} from 'react'


export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children})=>{
    <StateContext.Provider value={useReducer(redu)}>
        {children}
    </StateContext.Provider>
}