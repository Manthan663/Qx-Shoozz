import { FaComments } from "react-icons/fa6";
import blog from "../assets/blog-2.webp";
import { Blogs } from "../Constants/Blogs";
import Blog from "./Blog";
const Post = () => {
  return (
    <div className="mt-32 flex gap-10 px-20">
      <div className="w-1/2 flex flex-col gap-5">
        <p className="tracking-[2px] text-gray-400">FROM THE BLOG</p>

        <h1 className="text-5xl font-bold">Recently Our Posts</h1>

        <p className="max-w-md text-gray-400">
          Sit amet consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative overflow-hidden w-full">
          <img
            src={blog}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />

          <div className="absolute bottom-10 left-10 text-white">
            <div className="flex gap-3 items-center">
              <h1>Oct 28 2024</h1>
              <FaComments className="text-xl" />
              <p>0 comments</p>
            </div>

            <p className="text-2xl font-semibold">
              The Feature of Footwear: look Ahead
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col  gap-6 mt-44 ">
        {Blogs.map((item) => (
          <Blog key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Post;
