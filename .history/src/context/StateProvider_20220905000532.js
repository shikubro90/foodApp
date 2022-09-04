import {createContext, useContext, useReducer} from 'react'


export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children})=>{
    <StateContext.Provider >
        {children}
    </StateContext.Provider>
}