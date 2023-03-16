import { IPost } from "../../typings";

import { downvotePost, upvotePost, toggleFavorite } from "./postSlice";
import { useAppDispatch } from "../../app/hooks";

const BlogCard = (props: { posts: IPost[] }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {props.posts.map((post) => {
        return (
          <section className="card" key={post.id}>
            <div className="card-header">
              <span className="edit-icon">✎</span>
              <h1 className="delete-icon">x</h1>
            </div>
            <section className="card-body">
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
                <span className="favorite">{post.isFavorite ? "♥" : "♡"}</span>
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
