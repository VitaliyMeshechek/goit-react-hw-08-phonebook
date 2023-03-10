import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = (type) => extraActions.map(action => action[type])

const contactsInitialState = {
    contacts: [],
    isLoading: false,
    error: null
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    }).addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
    }).addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts.splice(index, 1);
    }).addMatcher(
      isAnyOf(...getActions("pending")), (state) => {
        state.isLoading = true;
      }
    ).addMatcher(
      isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    ).addMatcher(
      isAnyOf(...getActions("fulfilled")), (state) => {
        state.isLoading = false;
        state.error = null;
      }
    )
  },
  );


  export const contactReducer = contactsSlice.reducer;

