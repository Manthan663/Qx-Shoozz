const Shoesprod = ({ item }) => {

    return (

   <div className="group relative overflow-hidden mt-5 flex items-center justify-center">
   
       <img src={item.img} className="group-hover:scale-105 transition-transform duration-500"></img>

       <div className="absolute bottom-7 text-lg font-semibold">
            <div className="bg-white px-5 py-2 group-hover:bg-red-500 group-hover:text-white transition-transform duration-500">{item.Name}</div>
       </div>
   </div>

    );
};

export default Shoesprod;
