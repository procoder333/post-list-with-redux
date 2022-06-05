import { useNavigate } from "react-router-dom";
import { RootState } from "../store/index";
import { useSelector } from "react-redux";

export const PostDetail = () => {
  const post = useSelector((state: RootState) => state.post.post);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div>{post.userId}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};
