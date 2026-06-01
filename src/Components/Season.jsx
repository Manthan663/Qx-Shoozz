import React from "react"
import Seasons from "../Constants/Seasons";
import SeasonProd from "./SeasonProd";

const Season = () => {
    const repeatedData = [...Seasons,...Seasons,...Seasons]
    return(
    <React.Fragment>
        <div className="flex flex-col items-center justify-center mt-10">
             <h1 className="tracking-[1px] text-gray-400">SEASONS'S END SALE</h1>

             <p className="text-5xl text-black font-bold py-5">Huge discounts on last season's styles</p>

             <p className="text-gray-400">Himenaeos nascetur tristique consequat mus ad.</p>
             <p className="text-gray-400">Accumsan fringilla in laoreet id bibendum et.</p>
        </div>

        <div className="grid grid-cols-3 px-10 gap-10 mt-5">
            {repeatedData.map((item)=>(
                <div key={item.id} className="flex items-center gap-5 pb-6 border-b mt-5">
                    
                    <SeasonProd item={item}/>
                </div>
            ))}
        </div>
    </React.Fragment>
    )
};

export default Season;
