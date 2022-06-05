import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostEntity } from "../../models/post";

export interface PostState {
  post: PostEntity;
}

const initialState: PostState = {
  post: { userId: 0, id: 0, title: "", body: "" }
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<PostEntity>) => {
      state.post = action.payload;
    }
  }
});

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
