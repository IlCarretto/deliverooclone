import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IDish } from '../type';
import { createSelector } from '@reduxjs/toolkit';

interface InitialState {
    items: IDish[];
}

const initialState: InitialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        const {payload} = action;
        state.items = [...state.items, payload];
    },
    removeFromBasket: (state, action: PayloadAction<{_id: string}>) => {
      const {payload} = action;
      const index = state.items.findIndex((item) => item._id === payload._id);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Product with ID: ${payload._id}} is not in the basket!`);
      }
      state.items = newBasket;
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWidthId = createSelector(
  [selectBasketItems, (state: RootState, id: string) => id],
  (items, id) => {
    return items.filter((item) => item._id === id);
  }
);

export const selectBasketTotal = (state: RootState) => state.basket.items.reduce((total, item) => total += item.price, 0);


export default basketSlice.reducer