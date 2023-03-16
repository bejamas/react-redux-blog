import { useState } from "react";
import PostInputForm from "./PostInputForm";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { switchToAllPostsComponent } from "../navigations/navigationSlice";
import { updateBlogPost, selectAllPosts } from "./postSlice";


const EditPost = () => {

  const dispatch = useAppDispatch();
  const allPost = useAppSelector(selectAllPosts);

  const [title, setTitle] = useState(allPost.currentPost.title);
  const [content, setContent] = useState(allPost.currentPost.content);

  const modifyPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateBlogPost({ id: allPost.currentPost.id, title, content }));
    dispatch(switchToAllPostsComponent());
  };


  return (
    <>
      <PostInputForm
        submitPost={modifyPost}
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
      />
    </>
  );
};
export default EditPost;