import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { PostList } from "./containers/PostList";
import { PostDetail } from "./containers/PostDetail";
import { PostEntity } from "./models/post";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  useEffect(() => {
    async function getPostList() {
      const response = await axios.request({
        method: "get",
        baseURL: "https://jsonplaceholder.typicode.com/posts"
      });
      setPosts(response.data);
    }
    getPostList();
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/detail/:postId" element={<PostDetail />} />
        </Routes>
      </Provider>
      {/* <PostList posts={posts} />
      <PostDetail /> */}
    </div>
  );
}
