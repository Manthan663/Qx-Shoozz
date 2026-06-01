const SeasonProd = ({item}) =>{
  
    return(
        <div className="flex mt-3 gap-4">
            <img src={item.img} className="w-20 h-20 cursor-pointer"></img>
        <span className="flex flex-col gap-3">
            <p className="text-2xl">{item.Name}</p>
            <p>{item.Price}</p>
        </span>
        </div>
    )
}

export default SeasonProd