import { FaComments } from "react-icons/fa6";
const Blog = ({ item }) => {
  return (
    <>
      <div className="flex items-start gap-7 ">
        <div className="transition-transform duration-300  hover:scale-105 ">
          <img src={item.img} className="w-52 h-32 object-cover" loading="lazy"></img>
        </div>

        <div className="flex flex-col  gap-4">
          <div className="flex items-center gap-4">
            <p className="text-gray-400">{item.Date}</p>
            <FaComments className="text-gray-400 text-lg" />
            <p className="text-gray-400">0 Comments</p>
          </div>
          <h3 className="font-semibold text-lg">{item.description}</h3>
        </div>
      </div>
    </>
  );
};
export default Blog;
