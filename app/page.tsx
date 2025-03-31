import { getAuthSession } from "@/lib/auth";


export default async function Home() {

  const session = await getAuthSession();
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>
      {JSON.stringify(session,null,2)}
     </h1>
     <h1>hello</h1>
    </div>
  );
}
