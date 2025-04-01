// import { getAuthSession } from "@/lib/auth";
import { HeroSection } from "@/src/feature/layout/HeroSection";
import { AboutSection } from "@/src/feature/layout/AboutSection";
import { Categorie } from "@/src/feature/layout/Categorie";
import { NewCarousel } from "@/src/feature/layout/NewCarousel";

export default async function Home() {

  // const session = await getAuthSession();
  
  return (
    <div className="">
     {/* <h1> */}
      {/* {JSON.stringify(session,null,2)} */}
     {/* </h1> */}
     <HeroSection />
            <AboutSection />
            <Categorie />
            <NewCarousel />
    </div>
  );
}
