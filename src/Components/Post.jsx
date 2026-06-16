import { FaComments } from "react-icons/fa6";
import blog from "../assets/blog-2.webp";
import { Blogs } from "../Constants/Blogs";
import Blog from "./Blog";

const Post = () => {
  return (
    <div className="mt-20 md:mt-32 flex flex-col md:flex-row gap-10 px-4 md:px-10 lg:px-20">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <p className="tracking-[2px] text-gray-400">FROM THE BLOG</p>

        <h1 className="text-3xl md:text-5xl font-bold">Recently Our Posts</h1>

        <p className="max-w-md text-gray-400 text-sm md:text-base">
          Sit amet consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative overflow-hidden w-full rounded-lg">
          <img
            src={blog}
            alt="blog"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />

          <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 text-white">
            <div className="flex gap-3 items-center text-sm md:text-base">
              <h1>Oct 28 2024</h1>
              <FaComments className="text-lg md:text-xl" />
              <p>0 comments</p>
            </div>

            <p className="text-lg md:text-2xl font-semibold max-w-xs">
              The Feature of Footwear: look Ahead
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6 mt-0 md:mt-20">
        {Blogs.map((item) => (
          <Blog key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Post;
