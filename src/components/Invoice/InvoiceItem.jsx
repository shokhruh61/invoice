const InvoiceItem = ({ invoice }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-bold">{invoice.client}</h3>
        <p>Amount: ${invoice.amount}</p>
        <p>Status: {invoice.status}</p>
      </div>
    );
  };
  
  export default InvoiceItem;
  