import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    // state paramater refer to obj and it just a name we declare
    // action is paramater what change should be made to the state. name also
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption :
      // action.payload === { name: 'ab', cost: 140 }
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumption :
      // action.payload === the id of the car we want to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
