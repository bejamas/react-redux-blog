import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCurrentPost } from "./currentPostSlice";
import { switchToAllPostsComponent } from "./navigationSlice";
import PostInputForm from "./PostInputForm";
import { updateBlogPost } from "./postSlice";

const EditPost = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectCurrentPost);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const modifyPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateBlogPost({ id: post.id, title, content }));
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
