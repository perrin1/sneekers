import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://images.unsplash.com/photo-1610897600804-c36e2336ad3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9yZGFuJTIwNHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Stylish Sneakers",
    description: "Des chaussures confortables et élégantes.",
  },
  {
    src: "https://images.unsplash.com/photo-1611299081794-5965fc4d900b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvcmRhbiUyMDR8ZW58MHx8MHx8fDA%3D",
    title: "Sport Shoes",
    description: "Parfaites pour vos entraînements.",
  },
  {
    src: "https://images.unsplash.com/photo-1622831617330-bc799d6236b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5pa2V8ZW58MHx8MHx8fDA%3D",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
  {
    src: "https://img.freepik.com/premium-photo/sneakers-minimal-background-3d-render-illustration-mockup_941097-7867.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
  {
    src: "https://img.freepik.com/free-photo/3d-shoe-fire-with-flames_23-2151073828.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid ",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
  {
    src: "https://img.freepik.com/free-photo/close-up-basketball-shoes_23-2150847380.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
  {
    src: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5pa2UlMjBjaGF1c3N1cmV8ZW58MHx8MHx8fDA%3D",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
  {
    src: "https://images.unsplash.com/photo-1617143207675-e7e6371f5f5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5pa2UlMjBjaGF1c3N1cmV8ZW58MHx8MHx8fDA%3D",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
  {
    src: "https://images.unsplash.com/photo-1580906853149-f82f7601d205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5pa2UlMjBjaGF1c3N1cmV8ZW58MHx8MHx8fDA%3D",
    title: "Casual Wear",
    description: "Un style unique pour tous les jours.",
  },
];

export const NewCarousel = () => {
  return (
    <div className="mb-16 mt-5" >
      <div className="flex flex-col my-12 items-center justify-center">
        <dt className="mb-2 text-2xl  font-bold">Faites vos choix</dt>
        <dd className="font-light text-gray-500 text-3xl dark:text-gray-400">
          7M+ Sneekers
        </dd>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-[30vh] max-w-6xl mx-auto"
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-[180px] object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
