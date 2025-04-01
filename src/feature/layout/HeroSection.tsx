
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }));

  const slides  = [

    {
      image:  "https://img.freepik.com/premium-vector/sneakers-trendy-sneakers-sports-shoes-vector-flat-design-concept-lifestyle-sale-shoes-theme_758894-461.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {

      image: "https://img.freepik.com/premium-photo/photo-pair-nike-shoes-with-hightop_1298493-41966.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      
      image: "https://img.freepik.com/premium-photo/fashion-sneakers_890746-9383.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {

      image: "https://img.freepik.com/premium-photo/sport-running-shoes-sneakers-mockup-3d-illustration-3d-rendering_941097-22072.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {

      image: "https://img.freepik.com/premium-photo/sport-hd-8k-wall-paper-stock-photographic-image_890746-122471.jpg?ga=GA1.1.1948303635.1740554398&semt=ais_hybrid",

      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },





  ];

  return (
    <div className=" top-20  items-center w-[95%] mx-auto h-auto overflow-x-hidden ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
           <CarouselContent className="w-full h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Card className="w-full h-full">
                <CardContent className="w-full h-full p-0 grid grid-cols-1 md:grid-cols-1">
                  
                  {/* Texte 
                  <div className="flex md-only items-center justify-center p-4 md:p-8 bg-white dark:bg-gray-800">
                    <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-justify">
                      {slide.text}
                    </p>
                  </div> */}
                  {/* Image */}
                    <Image
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                      width={500}
                      height={500}
                      priority
                    />
                   
            
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
}
