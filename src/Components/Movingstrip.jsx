const Movingstrip = () => {
  return (
    <div className="w-full overflow-hidden bg-linear-to-r from-green-700 via-yellow-600 to-orange-600 py-3">
      <div className="flex whitespace-nowrap marquee">
        <div className="flex items-center gap-16 px-10 text-white text-sm">
          <span>Enjoy 20% off your entire order with the code SHOEFRESH20</span>
          <span>
            Get 15% off your first purchase when you sign up for our newsletter.
            Use code NEWSHOES15
          </span>
          <span>
            Buy one pair of shoes, get the second pair 50% off. Use code BOGO50
          </span>
        </div>

        <div className="flex items-center gap-16 px-10 text-white text-sm">
          <span>Enjoy 20% off your entire order with the code SHOEFRESH20</span>
          <span>
            Get 15% off your first purchase when you sign up for our newsletter.
            Use code NEWSHOES15
          </span>
          <span>
            Buy one pair of shoes, get the second pair 50% off. Use code BOGO50
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movingstrip;
