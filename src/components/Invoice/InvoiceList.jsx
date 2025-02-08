import InvoiceItem from "./InvoiceItem";
import { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

const InvoiceList = () => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <div>
      {invoices.length === 0 ? (
        <p>No invoices found</p>
      ) : (
        invoices.map((invoice) => <InvoiceItem key={invoice.id} invoice={invoice} />)
      )}
    </div>
  );
};

export default InvoiceList;
