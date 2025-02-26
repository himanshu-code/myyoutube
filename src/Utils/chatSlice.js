import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > OFFSET_LIVE_CHAT) {
        state.messages.splice(OFFSET_LIVE_CHAT, 1);
      }
      state.messages.unshift(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
