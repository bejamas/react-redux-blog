import { IPost } from "../../typings";
import { useAppDispatch } from "../../app/hooks";
import { setCurrentPost } from "./currentPostSlice";
import {
  switchToEditPostComponent,
  switchToViewPostComponent,
} from "./navigationSlice";
import { downvotePost, upvotePost, toggleFavorite, deletePost } from "./postSlice";
const BlogCard = (props: { posts: IPost[] }) => {
  const dispatch = useAppDispatch();
  const viewBlog = (post: IPost) => {
    dispatch(setCurrentPost(post));
    dispatch(switchToViewPostComponent());
  };
  const editBlog = (post: IPost) => {
    dispatch(setCurrentPost(post));
    dispatch(switchToEditPostComponent());
  };
  return (
    <>
      {props.posts.map((post) => {
        return (
          <section className="card" key={post.id}>
            <div className="card-header">
              <span className="edit-icon" onClick={()=>editBlog(post)}>✎</span>
              <h1 className="delete-icon"onClick={()=>dispatch(deletePost(post.id))}>x</h1>
            </div>
            <section
              className="card-body"
              onClick={() => {
                viewBlog(post);
              }}
            >
              <h1 className="card-title">
                {post.title.length > 150
                  ? post.title.slice(0, 150) + "..."
                  : post.title}
              </h1>
              <p className="card-summary">
                {post.content.length > 120
                  ? post.content.slice(0, 120) + "..."
                  : post.content}
              </p>
            </section>
            <section className="card-bottom">
              <section onClick={() => dispatch(toggleFavorite(post.id))}>
                <span
                  className={post.isFavorite ? "is-favorite" : "not-favorite"}
                >
                  {"❤"}
                </span>
              </section>
              <section className="rating-section">
                <span
                  className="upvote"
                  onClick={() => dispatch(upvotePost(post.id))}
                >
                  ⇧
                </span>
                <span className="vote-counter">{post.voteCount}</span>
                <span
                  className="downvote"
                  onClick={() => dispatch(downvotePost(post.id))}
                >
                  ⇩
                </span>
              </section>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default BlogCard;
