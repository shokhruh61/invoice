import { useParams } from "react-router-dom";

function Invoice() {
    const { id } = useParams();
    const invoice = data.find((item) => item.id === id);

    if (!invoice) {
        return <div className="p-8 text-center text-red-500 text-xl">Invoice not found</div>;
    }

    const currencyFormatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    return (
        <div className="p-8 bg-slate-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Invoice #{invoice.id}</h1>

            {/* Invoice ma'lumotlari */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <InvoiceInfo label="Invoice Date" value={new Date(invoice.invoiceDate).toLocaleDateString()} />
                <InvoiceInfo label="Payment Due" value={new Date(invoice.paymentDue).toLocaleDateString()} />
                <InvoiceInfo label="Client Name" value={invoice.clientName} />
                <InvoiceInfo label="Client Email" value={invoice.clientEmail} />
                <InvoiceInfo
                    label="Address"
                    value={`${invoice.clientAddress?.street}, ${invoice.clientAddress?.city}, ${invoice.clientAddress?.postCode}, ${invoice.clientAddress?.country}`}
                />
            </div>

            {/* Invoice mahsulotlar jadvali */}
            <table className="w-full border-collapse shadow-md bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        {["Item Name", "QTY", "Price", "Total"].map((header, index) => (
                            <th key={index} className="border px-4 py-2 text-left">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {invoice.items.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.quantity}</td>
                            <td className="border px-4 py-2">{currencyFormatter.format(item.price)}</td>
                            <td className="border px-4 py-2">{currencyFormatter.format(item.price * item.quantity)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Jami to'lov */}
            <div className="mt-6 text-lg font-bold text-right">
                Amount Due: {currencyFormatter.format(invoice.total)}
            </div>
        </div>
    );
}

// Har bir invoice ma'lumotlarini ko'rsatish uchun yordamchi komponent
function InvoiceInfo({ label, value }) {
    return (
        <div>
            <p className="font-medium text-gray-700">{label}:</p>
            <p className="text-gray-900">{value}</p>
        </div>
    );
}

export default Invoice;
