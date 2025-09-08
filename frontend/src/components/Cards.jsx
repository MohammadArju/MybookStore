

const ProductCard = ({item}) => {
  return (
    <div className="max-w-sm h-[460px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col mt-5">
      <div className="p-2">
        <img
          className="w-full h-64 object-cover rounded-xl hover:scale-105 transition duration-500 ease-in-out"
          src={item.image} // Make sure this image is inside public folder
          alt="Story Book"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.category}</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {item.title}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm px-3 py-1 border rounded-full text-gray-800">${item.price}</span>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full dark:bg-gray-700">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
