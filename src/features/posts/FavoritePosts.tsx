import BlogCard from "./BlogCard";
import NoFavoritePosts from "./NoFavoritePosts";
import { selectAllFavoritePosts } from "./postSlice";
import { useAppSelector } from "../../app/hooks";

const FavoritePosts = () => {
const favoritePosts = useAppSelector(selectAllFavoritePosts);
  if (!favoritePosts.length) {
    return <NoFavoritePosts />;
  }
  return (
    <>
      <BlogCard posts={favoritePosts} />
    </>
  );
};
export default FavoritePosts;