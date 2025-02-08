import { useState } from "react";

const InvoiceForm = ({ onSubmit }) => {
  const [invoice, setInvoice] = useState({
    client: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(invoice);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <input
        type="text"
        name="client"
        value={invoice.client}
        onChange={handleChange}
        placeholder="Client Name"
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        name="amount"
        value={invoice.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Invoice
      </button>
    </form>
  );
};

export default InvoiceForm;
