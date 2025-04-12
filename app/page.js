import Image from "next/image";
import Header from "@/components/Header";
import Generate from "@/components/Generate";

export default function Home() {
  return (
    <main className="sm:px-16 px-6 py-4">
      <div className="mb-16">
        <Header />
      </div>

      <div>
        <div>
          <Generate />
        </div>
      </div>
    </main>
  );
}
