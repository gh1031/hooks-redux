import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDispatch from '../hooks/useDispatch';
import Ctx from '../hooks/context';
import { useSelector } from '../hooks/useSelector';

export const Header = function (props) {
  const { state: { userInfo } } = useContext(Ctx);
  return (
    <div>
      欢迎：{userInfo.username || ''}
    </div>
  )
}

const PlusComp = () => {
  const { state: { count }} = useContext(Ctx);;
  const { dispatch } = useContext(Ctx);
  return (
    <div>
      <div>PlusComp count: { count }</div>
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>plus</button>
    </div>
  )
}
const MinusComp = () => {
  const { state: { count } } = useContext(Ctx);
  const { dispatch } = useContext(Ctx);
  return (
    <div>
      <div>MinusComp  count: { count }</div>
      <button onClick={() => dispatch({ type: 'MINUS', payload: 1 })}>minus</button>
    </div>
  )
}

const HooksHome = () => {
  const { state: { userInfo } } = useContext(Ctx);

  const history = useHistory();
  useEffect(() => {
    if (!userInfo.username) {
      history.push('/login')
    }
  }, [])
  return (
    <div>
      <Header />
      <PlusComp />
      <MinusComp />
    </div>
  )
}

export default HooksHome;
