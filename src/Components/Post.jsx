import blog from "../assets/blog-2.webp"
const Post = () => {
  return (
    <div className="relative bg-gray-300 mt-20 flex flex-col gap-4 pl-20">
      <p className="tracking-[2px]">FROM THE BLOG</p>

      <h1 className="text-5xl font-bold">Recently Our Posts</h1>
      <p className="max-w-90">
        Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>

      <img src={blog} className="w-1/2 object-contain bg-linear-to-b from-0% to-black"></img>
    </div>
  );
};

export default Post;
