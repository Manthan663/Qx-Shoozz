const SubMenu = ({ items, images }) => {
  return (
    <div className=" absolute left-1/2 -translate-x-1/2 top-full w-screen bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-10 py-10 flex lg:gap-20 md:gap-10">
        {items.map((sub, index) => (
          <div key={index} className="min-w-45">
            <h3 className="font-semibold text-black mb-5 text-lg">
              {sub.title}
            </h3>
            <ul className="space-y-3">
              {sub.items?.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-500 hover:text-red-500 cursor-pointer transition duration-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex gap-10 mt-5">
          {images?.map((img, i) => (
            <div key={i} className="w-70">
              <img src={img.image} className="h-70 object-cover rounded-md" />
              <div>
                {img?.price ? (
                  <p className="flex text-gray-500 text-lg">{img.price}</p>
                ) : null}
                <p className="flex max-w-full font-semibold text-lg">
                  {img.name}
                </p>
                {img?.Type ? (
                  <p className="flex text-gray-500 text-lg">{img.Type}</p>
                ) : null}
              </div>
              <p className="flex items-center justify-center font-semibold text-lg">
                {img.Name}
              </p>
              <h1 className="flex items-center justify-center text-gray-400">
                {img.Products}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
