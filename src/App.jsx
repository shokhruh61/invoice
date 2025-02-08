import { InvoiceProvider } from "./context/InvoiceContext";
import InvoiceList from "./components/Invoice/InvoiceList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <InvoiceProvider>
      <Navbar />
      <main className="container mx-auto p-4">
        <InvoiceList />
      </main>
    </InvoiceProvider>
  );
}

export default App;
