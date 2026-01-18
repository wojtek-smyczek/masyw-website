import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="left-10 min-h-screen text-white flex flex-col">
      <Hero />
      <ProductList />
    </main>
  );
}
