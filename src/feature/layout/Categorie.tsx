import { CategorieCard } from "@/components/ui/CategorieCard";
import React from "react";

const products = [
  {
    title: "Jordan 4 Retro",
    imageUrl:
      "https://images.unsplash.com/photo-1611299106168-277a21fad977?w=500&auto=format&fit=crop&q=60",
    description: "Édition limitée Red Thunder",
    minPrice: 220,
    maxPrice: 270,
  },
  {
    title: "Jordan 4 Retro",
    imageUrl:
      "https://img.freepik.com/premium-photo/air-jordan-4-retro-bred_1028654-33876.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",
    description: "Confort et style inégalé",
    minPrice: 150,
    maxPrice: 200,
  },
  {
    title: "Adidas Yeezy Boost 350",
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60",
    description: "L'icône du streetwear",
    minPrice: 250,
    maxPrice: 350,
  },
];

export const Categorie = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center w-full max-w-[90%] overflow-hidden mx-auto px-4 py-8">
      <div className="flex flex-col my-8 items-center justify-center">
        <dt className="mb-2 text-2xl  font-bold">Faites vos choix</dt>
        <dd className="font-light text-gray-500 text-3xl dark:text-gray-400">
           7M+ Sneekers
        </dd>
      </div>
      <div className=" border-t bordder-t-accent grid grid-cols-1 md:grid-cols-3 gap-2 p-2 mx-auto w-[98%]">
        {products.map((product, index) => (
          <CategorieCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
