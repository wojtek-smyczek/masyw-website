import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main className="left-10 flex min-h-screen flex-col text-white">
      <Hero />
      <Description />
      <ProductList />
    </main>
  );
}
