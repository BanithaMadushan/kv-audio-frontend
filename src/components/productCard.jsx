export default function ProductCard({ item }) {
    const {
      name,
      price,
      category,
      dimensions,
      description,
      availability,
      image,
    } = item;
  
    const imgSrc =
      (Array.isArray(image) && image[0]) ||
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg";
  
    const formattedPrice = new Intl.NumberFormat("en-LK").format(Number(price || 0));
  
    return (
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image */}
        <div className="relative w-full h-52 bg-gray-100">
          <img
            src={imgSrc}
            alt={name || "Product image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
  
          {/* Availability badge */}
          <div className="absolute top-3 left-3">
            {availability ? (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                In Stock
              </span>
            ) : (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">
                Out of Stock
              </span>
            )}
          </div>
  
          {/* Category badge */}
          {category && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-900 text-white">
                {category}
              </span>
            </div>
          )}
        </div>
  
        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {name || "Unnamed Product"}
            </h2>
  
            <div className="text-right">
              <p className="text-xs text-gray-500">Price</p>
              <p className="text-lg font-bold text-gray-900">LKR {formattedPrice}</p>
            </div>
          </div>
  
          {/* Quick info */}
          <div className="mt-3 flex flex-wrap gap-2">
            {dimensions && (
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                {dimensions}
              </span>
            )}
  
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-gray-400" />
              Code: {item?.key || "-"}
            </span>
          </div>
  
          {/* Description */}
          {description && (
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">
              {description}
            </p>
          )}
  
          {/* Actions */}
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 active:scale-[0.99] transition"
              disabled={!availability}
            >
              {availability ? "Add to Cart" : "Unavailable"}
            </button>
  
            <button
              type="button"
              className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 active:scale-[0.99] transition"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
  