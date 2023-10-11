import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [
  { id: 1, name: "Tom", number: "+48523698741" },
  { id: 2, name: "Rom", number: "+48523698741" },
  { id: 3, name: "Dom", number: "+48523698741" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  redusers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
