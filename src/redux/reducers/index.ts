import { AnyAction, combineReducers } from "redux";

interface WithPayloadAction  extends AnyAction {
  payload: any;
}
export interface CalculateState {
  count: number;
}
interface OrderInfo {
  id: string;
  payWayDesc: string;
  platformDesc: string;
  recipientName: string;
}

export interface OrderState {
  list: OrderInfo[]
}
export interface FullState {
  calculate: CalculateState;
  order: OrderState;
};

export default combineReducers<FullState, WithPayloadAction>({
  calculate(state = { count: 0}, action) {

    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + action.payload,
        }
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - action.payload,
        }
      default:
        return state;
    }
  },
  order(state = { list: []}, action) {
    switch(action.type) {
      case 'ORDER_LIST':
        return {
          ...state,
          list: action.payload
        }
      default:
        return state;
    }
  }
});
