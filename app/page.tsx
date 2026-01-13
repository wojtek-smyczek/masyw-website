import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="left-10 min-h-screen bg-masyw-dark text-white">
      <Navbar />
      <Hero />
      <Products />
    </main>
  );
}
