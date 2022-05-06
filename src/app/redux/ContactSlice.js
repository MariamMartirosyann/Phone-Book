import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { defaultContactList } from "./constants";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    list: defaultContactList,
  },
  reducers: {
    addContact: (state, { payload: { name, number, email } }) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
        email,
      };
      state.list = [...state.list, newContact];
    },
    updateContact: (state, { payload }) => {
      const newState = state.list.map((item) => {
        if (payload?.id === item.id) {
          return payload;
        }
        return item;
      });
      state.list = newState;
    },
    deleteContact: (state, { payload }) => {
      state.list = [
        ...state.list.filter((contact) => contact.id !== payload.id),
      ];
    },
  },
});
export const { addContact, updateContact, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
