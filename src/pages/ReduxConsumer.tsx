import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FullState, CalculateState, OrderState } from '../redux/reducers';

interface Props {};

const Home: FC<Props> = () => {
  const state = useSelector<FullState, CalculateState>(state => {
    return state.calculate
  });
  const { list } = useSelector<FullState, OrderState>(state => state.order)
  const dispatch = useDispatch();
  
  useEffect(() => {
    function fetchJSON() {
      setTimeout(() => {
        fetch('/api/json')
          .then(row => row.json())
          .then(data => {
            dispatch({ type: 'ORDER_LIST', payload: data })
          })
      }, 1000)
    }
    fetchJSON();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>payWayDesc</th>
            <th>platformDesc</th>
            <th>recipientName</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(item => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.payWayDesc}</th>
                <th>{item.platformDesc}</th>
                <th>{item.recipientName}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
      
      <div>CurrentCount: { state.count }</div>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-</button>
    </>
  )
}

export default Home;
