import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost } from "./../store/reducers/postSlice";
export const PostList = (props: any) => {
  const { posts } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToDetail = (post: any) => {
    navigate(`/detail/${post.id}`);
    dispatch(setPost(post));
  };

  return (
    <div>
      {posts.map((item: any) => (
        <div key={item.id.toString()} onClick={() => goToDetail(item)}>
          <div>{item.userId}</div>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};
