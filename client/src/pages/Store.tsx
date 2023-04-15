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
  const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
       <section className="bg-slate-100">
      <div className="flex items-center justify-center mt-8">
        <input
          type="text"
          placeholder="Search products"
          className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
        {filteredProducts.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </div>
    </section>
      </div>
    </div>

};

export default Store;

