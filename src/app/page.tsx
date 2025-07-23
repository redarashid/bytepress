import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import Main from "./Main";

export default function Home() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
  return <Main posts={posts} />;
}
