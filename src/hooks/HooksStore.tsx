import React, { FC, useReducer, useState } from 'react';
import Ctx from './context';

export interface State {
  userInfo: { [key: string]: string };
  count: number;
}
export type PartialState = keyof State;

const initialState = {
  userInfo: {},
  count: 0,
}

function reducers(state: State, action: { type: string, payload: any}) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userInfo: action.payload,
      }
    case 'PLUS':
      return {
        ...state,
        count: state.count + action.payload
      };
    case 'MINUS':
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      console.log('no action type matched');
  }
}

const CtxProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Ctx.Provider value={{ state, dispatch }}>
      {children}
    </Ctx.Provider>
  )
}

export default CtxProvider;
