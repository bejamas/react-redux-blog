import { useAppDispatch } from "../../app/hooks";
import { switchToAddNewPostComponent } from "./navigationSlice";

const NoPost = () => {
  const dispatch = useAppDispatch();
    return (
      <>
        <section className="no-posts-card">
          <h1>You have not created any blog posts.</h1>
          <button onClick={() => dispatch(switchToAddNewPostComponent())}>
          Add New
        </button>
        </section>
      </>
    );
  };
  export default NoPost;