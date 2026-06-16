import newsimg from "../assets/newslatter-image.webp";

const News = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10 mt-20 md:mt-32">

      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300 overflow-hidden">

        
        <div className="bg-red-600 p-6 md:p-10 flex flex-col justify-center">

          <h2 className="text-white text-2xl md:text-4xl font-bold uppercase leading-tight max-w-md">
            Subscribe to our News Article
          </h2>

         
          <div className="relative mt-6 md:mt-8 flex w-full max-w-md">

            <input
              type="email"
              placeholder="Your Email"
              className="bg-white w-full px-4 py-3 pr-28 outline-none"
            />

            <button className="bg-black text-white px-4 md:px-6 py-3 absolute right-0 h-full">
              Subscribe
            </button>

          </div>

        </div>

       
        <img
          src={newsimg}
          alt="newsletter"
          className="lg:w-full md:w-3xl h-64  object-cover"
        />

      </div>

    </section>
  );
};

export default News;