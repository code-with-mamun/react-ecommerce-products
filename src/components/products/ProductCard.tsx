// import React, { type Dispatch, type SetStateAction } from "react";
import { useState } from "react";
import type { ProductType } from "../../type";
interface IProductCard {
  product: ProductType;
  // cardCount:ProductType[];
  // setCardCount: Dispatch<SetStateAction<ProductType[]>>;
  handleCount:(product:ProductType) =>void
}
const ProductCard = ({ product,handleCount }: IProductCard) => {
  const [add,setAdd] = useState(false)
  const handleAdd = () =>{
     setAdd(!add)
     handleCount(product)

  }
  return (
    <div className="group flex h-[700px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex aspect-[5/4] shrink-0 items-center justify-center overflow-hidden bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-600 shadow-sm">
          {product.category}
        </span>

        <button
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-gray-500 shadow-sm transition-colors hover:bg-red-50 hover:text-red-500"
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-amber-400">★</span>
            <span className="font-bold text-gray-800">
              {product.rating.rate}
            </span>
            <span className="text-xs text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-xs font-medium text-green-600">In Stock</span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-base font-bold leading-5 text-gray-800 transition-colors group-hover:text-blue-600">
          {product.title}
        </h3>

        <p className="mb-3 line-clamp-2 flex-1 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price & Button */}
        <div className="mt-auto border-t border-gray-100 pt-3">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            <span className="text-xs text-gray-400">Free shipping</span>
          </div>

          <button  onClick={handleAdd}
          //  onClick={()=>handleCount(product)} 
             className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600 active:scale-95">
            <span>＋</span>
            
            {add ? "added" : "add to Card"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
