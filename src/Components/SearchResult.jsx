const SearchResult = ({ products, searchItem }) => {
  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">
        Products
      </p>

      <div className="space-y-4 max-h-85 overflow-y-auto">
        {products.length === 0 ? (
          <p className="text-gray-400 text-sm">No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 cursor-pointer hover:opacity-60 transition-opacity"
            >
              <img
                src={product.img}
                alt={product.Name}
                className="w-20 h-20 object-cover bg-gray-100 shrink-0"
              />
              <div>
                <p className="text-base font-medium text-gray-800">
                  {product.Name}
                </p>
                <p className="text-sm text-gray-400 mt-0.5">{product.Price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 bg-gray-100 px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors">
        <span className="text-sm text-gray-500">Search for "{searchItem}"</span>
        <span className="text-gray-500 text-lg">→</span>
      </div>
    </div>
  );
};

export default SearchResult;
