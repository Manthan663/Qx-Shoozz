const News = () => {
  return (
    <div>
      <section className="w-full px-5 py-10 mt-38">
        <div className="grid grid-cols-2 overflow-hidden border border-gray-300">
          <div className="bg-red-600 p-8  flex flex-col justify-center">
            <h2 className="text-white text-4xl font-bold uppercase leading-tight max-w-md">
              Subscribe to our News Article
            </h2>
            <div className="relative mt-8 flex w-125">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white w-full  px-4 py-3"
              />
              <button className="bg-black text-white px-6 py-3 absolute right-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
