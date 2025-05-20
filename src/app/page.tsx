import Hero from "./_hero/page";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full  min-h-screen">
      <Hero />
    </div>
  );
}
