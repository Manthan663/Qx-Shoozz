import React from "react";
import Seasons from "../Constants/Seasons";
import SeasonProd from "./SeasonProd";

const Season = () => {
  const repeatedData = Seasons.flatMap((item) => [item, item, item]);

  return (
    <React.Fragment>

    
      <div className="flex flex-col items-center justify-center mt-10 px-4 text-center">
        <h1 className="tracking-[1px] text-gray-400">
          SEASON'S END SALE
        </h1>

        <p className="text-3xl md:text-5xl text-black font-bold py-5">
          Huge discounts on last season's styles
        </p>

        <p className="text-gray-400">
          Himenaeos nascetur tristique consequat mus ad.
        </p>
        <p className="text-gray-400">
          Accumsan fringilla in laoreet id bibendum et.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-4 px-4 md:px-10 mt-8">
        
        {repeatedData.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="pb-6 border-b"
          >
            <SeasonProd item={item} />
          </div>
        ))}

      </div>

    </React.Fragment>
  );
};

export default Season;