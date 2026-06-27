import { Sidebar } from "@/components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white antialiased flex h-screen overflow-hidden w-full">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto bg-neutral-950">
        {children}
      </main>
    </div>
  );
}
