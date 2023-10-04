import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface InitialState {
    restaurant: {
        _id: string | null;
        Image: Object | undefined | null;
        imgUrl: Object | undefined | null;
        name: string | null;
        rating: number | null;
        type: Object | null;
        address: string | null;
        short_description: string | null;
        dishes: [] | null;
        long: number | null;
        lat: number | null;
    }
}

const initialState: InitialState = {
  restaurant: {
        _id: null,
        Image: null,
        imgUrl: null,
        name: null,
        rating: null,
        type: null,
        address: null,
        short_description: null,
        dishes: null,
        long: null,
        lat: null,
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    }
  },
})

export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default restaurantSlice.reducer