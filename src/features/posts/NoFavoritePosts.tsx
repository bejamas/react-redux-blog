import { useAppDispatch } from "../../app/hooks";
import { switchToAllPostsComponent } from "./navigationSlice";
const NoFavoritePosts = () => {
    const dispatch = useAppDispatch();
    return (
      <>
        <section className="no-posts-card">
          <h1>You haven't marked any blog posts as favorites.</h1>
          <button onClick={() => dispatch(switchToAllPostsComponent())}>
          Add a post to your favorites
        </button>
        </section>
      </>
    );
  };
  export default NoFavoritePosts;