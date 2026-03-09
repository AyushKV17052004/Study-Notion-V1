import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Courses: localStorage.getItem("Courses")
    ? JSON.parse(localStorage.getItem("Courses"))
    : [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCourse: (state, action) => {

      if (!state.Courses.includes(action.payload)) {
        state.Courses.push(action.payload);
        localStorage.setItem("Courses", JSON.stringify(state.Courses));
      }
    },

    removeCourse: (state, action) => {
      state.Courses = state.Courses.filter(
        (courseId) => courseId !== action.payload
      );
      localStorage.setItem("Courses", JSON.stringify(state.Courses));
    },

    clearCart: (state) => {
      state.Courses = [];
      localStorage.removeItem("Courses");
    },
  },
});

export const { addCourse, removeCourse, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
