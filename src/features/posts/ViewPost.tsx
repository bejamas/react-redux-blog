import { useAppSelector } from "../../app/hooks";
import { selectCurrentPost } from "./currentPostSlice";
const ViewPost = () => {
    const post = useAppSelector(selectCurrentPost);
    return (
      <>
        <section className="view-post-container">
          <h1 className="view-post-title">{post.title}</h1>
          <p className="view-post-content">{post.content}</p>
        </section>
      </>
    );
  };
  export default ViewPost;