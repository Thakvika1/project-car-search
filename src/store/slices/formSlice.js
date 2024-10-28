import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    // state paramater refer to obj and it just a name we declare
    // action is paramater what change should be made to the state. name also
    changeName(state, action) {
      // payload is a new value that u 1 to set or update
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  // after click submit the input field will be empty
  extraReducers(anything) {
    anything.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

// why it has s in the end of the word actions ?
export const { changeName, changeCost } = formSlice.actions;
// remember no s in reducer bcuz this is the 1 single combined reducer
export const formReducer = formSlice.reducer;
