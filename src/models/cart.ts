import type { Reducer, Effect } from 'umi';

export type CartState = {
  cart: [];
};

export type CartModelType = {
  namespace: string;
  state: CartState;
  effects: {
    addItems: Effect;
    removeItems: Effect;
  };
  reducers: {
    addToCart: Reducer<CartState>;
    removeFromCart: Reducer<CartState>;
  };
};

const Model: CartModelType = {
  namespace: 'cart',
  state: {
    cart: [],
  },
  effects: {
    *addItems({ payload }, { put }) {
      yield put({
        type: 'addToCart',
        payload: payload,
      });
    },
    *removeItems() {},
  },
  reducers: {
    addToCart(state, { payload }): any {
      state.cart.push({ ...payload });
      return { ...state };
    },
    removeFromCart(): any {},
  },
};

export default Model;
