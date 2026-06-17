const Strip = () => {
  return (
    <div className="bg-linear-to-r from-violet-400 via-violet-400 to-red-500 overflow-hidden h-10 text-center">
      <div className="flex items-center justify-around gap-10 text-white font-semibold text-lg marquee whitespace-nowrap">
        <h1>
          Enjoy 20% off your entire order with the code SHOEFRESH20
          <span className="underline ">Dismiss</span>
        </h1>
        <h1>
          Get 15% off your first purchase when you sign up for our newsletter.
          <span className="underline">Dismiss</span>
        </h1>
        <h1>
          Get 15% off your first purchase when you sign up for our newsletter.
          <span className="underline ">Dismiss</span>
        </h1>
      </div>
    </div>
  );
};
export default Strip;
