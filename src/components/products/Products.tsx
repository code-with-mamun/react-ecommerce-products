import { use, useState } from "react";
import type { ProductType } from "../../type";
import ProductCard from "./ProductCard";

interface IProductsPromise {
  productsPromise: Promise<ProductType[]>;
}

const Product = ({ productsPromise }: IProductsPromise) => {
  const products = use(productsPromise);
  const [cardCount, setCardCount] = useState<ProductType[]>([]);

  // Kept the original includes + if approach; this toggles the clicked product in the cart.
  const handleCount = (product: ProductType): void => {
    let newProduct = [...cardCount, product];

    if (cardCount.includes(product)) {
      newProduct = cardCount.filter((item) => item !== product);
    }

    setCardCount(newProduct);
  };

  return (
    <>
      <h1>Card Length:{cardCount.length}</h1>
      <div className="grid grid-cols-4 gap-7 mx-4">
        {/* Removed the old commented-out cart state props; ProductCard only needs the toggle handler. */}
        {products.map((product) => (
          <ProductCard
            handleCount={handleCount}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
