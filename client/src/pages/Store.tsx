import React, { useState } from "react";
import Card from "../components/Card";
import products from "../data/products.json";

const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
  );
};

export default Store;

