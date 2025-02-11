import { useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkLightMode";
import data from "../assets/data.json";

const InvoiceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();
    const invoice = data.find((item) => item.id.toString() === id);

    if (!invoice) {
        return <div className="p-8 text-center text-red-500 text-xl">Invoice not found</div>;
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(amount);
    };

    const handleDelete = () => {
        console.log("Invoice deleted:", invoice.id);
        navigate("/");
    };

    const handleEdit = () => {
        navigate(`/edit/${invoice.id}`);
    };

    const handleMarkAsPaid = () => {
        console.log("Invoice marked as paid:", invoice.id);
    };

    return (
        <div className="w-[688px] mx-auto ">
            <div className={` rounded-[8px] mt-6 flex items-center justify-between gap-4 shadow-2xl border-2 mb-5 p-5 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-black'}`}>
                <div className="flex items-center gap-10">
                    Status
                    <span className="text-[#FF8F00]">•{invoice.status}</span>
                </div>
                <div className="flex gap-5">
                    <button
                        onClick={handleEdit}
                        className={`cursor-pointer ${darkMode ? 'bg-slate-700 text-white' : 'bg-gray-300 text-gray-700'} px-4 py-2 rounded-[24px] hover:bg-gray-400`}
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className={`cursor-pointer bg-[#EC5757] text-white px-4 py-2 hover:bg-[#FF9797] rounded-[24px]`}
                    >
                        Delete
                    </button>
                    <button
                        onClick={handleMarkAsPaid}
                        className={`cursor-pointer bg-[#7C5DFA] text-white px-4 rounded-[24px] py-2 hover:bg-[#9277FF]`}
                    >
                        Mark as {invoice.status}
                    </button>
                </div>
            </div>
            <div className={`p-8 rounded-[8px] ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-black'} min-h-screen`}>

                <h1 className="text-2xl font-bold mb-6">Invoice #{invoice.id}</h1>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                        <p className="font-medium text-gray-700">Invoice Date:</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{new Date(invoice.invoiceDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Payment Due:</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{new Date(invoice.paymentDue).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Bill To:</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{invoice.clientName}</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{invoice.clientAddress.street}</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{invoice.clientAddress.city}</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{invoice.clientAddress.postCode}</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{invoice.clientAddress.country}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Sent to:</p>
                        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>{invoice.clientEmail}</p>
                    </div>
                </div>

                <table className="w-full border-collapse shadow-md bg-[#252945]">
                    <thead className={`${darkMode ? 'bg-[#252945]' : 'bg-gray-200'}`}>
                        <tr>
                            <th className="px-4 py-2 text-left">Item Name</th>
                            <th className="px-4 py-2 text-left">QTY.</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.items.map((item, index) => (
                            <tr key={index} className={` ${darkMode ? 'bg-[#252945] text-white' : 'bg-white text-black'}`}>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.quantity}</td>
                                <td className="px-4 py-2">{formatCurrency(item.price)}</td>
                                <td className="px-4 py-2">{formatCurrency(item.price * item.quantity)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={`mt-6 p-4 rounded-b-2xl ${darkMode ? 'bg-[#0C0E16]' : 'bg-gray-800'} text-white text-lg font-bold text-right`}>
                    Amount Due: {formatCurrency(invoice.total)}
                </div>
            </div></div>
    );
};

export default InvoiceDetails;