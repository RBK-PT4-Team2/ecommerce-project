import React, { useState } from "react";
import Card from "../components/Card";
import products from "../data/products.json";
import FilterStore from "../components/FilterStore";
interface product {
  id: number;
  category: string;
  title: string;
  price: number;
  imageUrl: string;
}
const Store: React.FC = () => {
  const [data, setData] = useState<product[]>(products);
  const [price, setPrice] = useState<number>(0);
  const allProduct: product[] = structuredClone(products);
  var categories = [...new Set(allProduct.map((product) => product.category))];
  const filterBycategory = (categoryName: string) => {
    setData(allProduct);
    setData(allProduct.filter((product) => product.category === categoryName));
  };
  const allData: MouseEventHandler<HTMLHeadingElement> = () => {
    setData(allProduct);
  };
  const filterByPrice = () => {
    price
      ? setData(allProduct.filter((product) => product.price < price))
      : setData(allProduct);
  };

  return (
    <div className="row">
      <FilterStore
        allData={allData}
        categories={categories}
        filterBycategory={filterBycategory}
        setPrice={setPrice}
        filterByPrice={filterByPrice}
      />
      <div className="col-md-10">
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-slate-100">
          {data.map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Store;
