import React, { FC, useReducer, useState } from 'react';
import Ctx from './context';

interface Props {
  initState?: { [key: string]: any } | any[];
};

function reducers(state, action: { type: string, payload: any}) {
  switch (action.type) {
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

const CtxProvider: FC<Props> = ({ children }) => {
  const [initState, dispatch] = useReducer(reducers, { count: 1});

  return (
    <Ctx.Provider value={{ initState, dispatch }}>
      {children}
    </Ctx.Provider>
  )
}

export default CtxProvider;
