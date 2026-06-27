import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 mt-20">
        {children}
      </div>
      <Footer />
    </main>
  );
}
