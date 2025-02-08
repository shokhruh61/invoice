import Navbar from "../components/Navbar";
import InvoiceList from "../components/Invoice/InvoiceList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Invoice Dashboard</h1>
        <InvoiceList />
      </main>
    </div>
  );
}
