import React from "react";

export const AboutSection = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-3/4  mx-auto mt-15">
        <section className="bg-white dark:bg-background">
          <div className="  px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl className="grid   gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-bold">73M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Sneekers
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-bold">1B+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Visite
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-bold">4M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Marque
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="bg-white dark:bg-background">
          <div className="gap-16 items-center py-8 px-4 mx-auto  lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Les Sneakers : Plus qu&apos;une Mode, un Style de Vie
              </h2>
              <p className="mb-4 text-justify text-gray-700 dark:text-gray-300">
                Les sneakers ne sont pas juste des chaussures, ce sont des
                icônes de la culture urbaine. De la rue aux podiums de la mode,
                elles sont devenues un symbole d&apos;expression personnelle,
                combinant
                <strong> confort, performance et design unique </strong> .
              </p>
              <p className="mb-4 ext-justify text-gray-700 dark:text-gray-300">
                Que vous soyez passionné de{" "}
                <strong>
                  {" "}
                  basketball, de running ou simplement de streetwear{" "}
                </strong>{" "}
                , il existe une paire pour chaque style et chaque occasion.{" "}
                <strong> Nike, Adidas, Puma, New Balance… </strong> chaque
                marque apporte son innovation pour repousser les limites du
                design et du confort.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1698339513960-62470074d09e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOXx8fGVufDB8fHx8fA%3D%3D"
                alt="office content 1"
                />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://images.unsplash.com/photo-1690136813477-89360835c29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lZWtlcnN8ZW58MHx8MHx8fDA%3D"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
