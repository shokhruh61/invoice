import { createContext, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};
