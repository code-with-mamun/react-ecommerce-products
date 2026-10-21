import { Suspense } from "react";
import "./App.css";
import type { ProductType } from "./type";
import Product from "./components/products/Products";
const productsPromise = async (): Promise<ProductType[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};
function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Product productsPromise={productsPromise()}></Product>
      </Suspense>
    </>
  );
}

export default App;
