import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: [
    {
      id: 0,
      name: "John Doe",
      number: 149856541,
    },
    {
      id: 1,
      name: "Johna Smitgh",
      number: 279856471,
    },
  ],

  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: Date.now(),
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email,
      };
      state = [...state, newContact];
    },
    updateContact: (state, action) => {
      const newState = state.map((item) => {
        if (action.payload.id === item.id) {
          return action.payload;
        };
        return item;
      })
      state = newState;
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload.id);
    },
  },
});
export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;