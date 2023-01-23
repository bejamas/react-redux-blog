import BlogCard from "./BlogCard";
import NoPosts from "./NoPosts";

const AllPosts = () => {
  const allPosts: any = [];
  if (!allPosts.length) {
    return <NoPosts />;
  }
  return (
    <>
      <BlogCard posts={AllPosts} />
    </>
  );
};
export default AllPosts;