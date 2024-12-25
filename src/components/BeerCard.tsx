interface Beer {
  id: number;
  name: string;
  price: string;
  rating: {
    average: number;
    reviews: number;
  };
  image: string;
  description?: string;
}

interface BeerCardProps {
  beer: Beer;
}

export function BeerCard({ beer }: BeerCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-amber-500/50 transition-all">
      {beer.image ? (
        <img
          src={beer.image}
          alt={beer.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500";
          }}
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-3-3H7L4 7m16 0v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0h-2M4 7h2"
            />
          </svg>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-100 truncate">
          {beer.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <svg
            className="w-4 h-4 text-yellow-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-sm text-gray-300">
            {beer.rating.average.toFixed(1)} ({beer.rating.reviews} reviews)
          </span>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2">
          {beer.description || "No description available"}
        </p>
        <div className="mt-3 text-lg font-semibold text-amber-500">
          {beer.price}
        </div>
      </div>
    </div>
  );
}
