import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Description from "@/components/Description";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <Hero />
      <Description />
      <ProductList />
    </div>
  );
}
