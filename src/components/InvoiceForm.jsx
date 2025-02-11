import React from "react";
import { useFormik } from "formik";
import { useDarkMode } from "../context/DarkLightMode.jsx";
import * as Yup from "yup";

const InvoiceForm = ({ isOpen, onClose }) => {
    const { darkMode } = useDarkMode();

    const validationSchema = Yup.object({
        streetAddress: Yup.string().min(5, "Must be 5 or more characters long").required("Street Address is required"),
        city: Yup.string().min(5, "Must be 5 or more characters long").required("City is required"),
        postCode: Yup.string()
            .matches(/^\d{2}-\d{3}$/, "The postcode's format is XX-XXX")
            .required("Post Code is required"),
        country: Yup.string().min(2, "Must be 2 or more characters long").required("Country is required"),
        clientName: Yup.string().min(5, "Must be 5 or more characters long").required("Client's Name is required"),
        clientEmail: Yup.string().email("Invalid email address").required("Client's Email is required"),
        projectDescription: Yup.string().min(5, "Must be 5 or more characters long").required("Project Description is required"),
    });

    const formik = useFormik({
        initialValues: {
            streetAddress: "",
            city: "",
            postCode: "",
            country: "",
            clientName: "",
            clientEmail: "",
            projectDescription: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Invoice Data:", values);
            onClose();
        },
    });

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            onClick={onClose}
        >
            <div
                className={`fixed left-0 top-0 w-1/3 h-full p-6 shadow-lg transition-transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${darkMode ? "bg-[#1e2139] text-white" : "bg-white text-gray-900"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-6">New Invoice</h2>

                {/* Form */}
                <form onSubmit={formik.handleSubmit}>
                    {/* Bill From */}
                    <div className="mb-6">
                        <h3 className="text-lg mb-2">Bill From</h3>
                        <input
                            type="text"
                            name="streetAddress"
                            placeholder="Street Address"
                            className={`w-full p-2 rounded border ${formik.touched.streetAddress && formik.errors.streetAddress ? "border-red-500" : darkMode ? "border-gray-500 bg-[#252945] text-white" : "border-gray-300"
                                }`}
                            {...formik.getFieldProps("streetAddress")}
                        />
                        {formik.touched.streetAddress && formik.errors.streetAddress && (
                            <p className="text-red-500 text-sm">{formik.errors.streetAddress}</p>
                        )}

                        <div className="grid grid-cols-3 gap-2 mt-2">
                            {["city", "postCode", "country"].map((field) => (
                                <input
                                    key={field}
                                    type="text"
                                    name={field}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className={`p-2 rounded border ${formik.touched[field] && formik.errors[field] ? "border-red-500" : darkMode ? "border-gray-500 bg-[#252945] text-white" : "border-gray-300"
                                        }`}
                                    {...formik.getFieldProps(field)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bill To */}
                    <div className="mb-6">
                        <h3 className="text-lg mb-2">Bill To</h3>
                        {["clientName", "clientEmail"].map((field, index) => (
                            <input
                                key={index}
                                type={field === "clientEmail" ? "email" : "text"}
                                name={field}
                                placeholder={field === "clientName" ? "Client's Name" : "Client's Email"}
                                className={`w-full p-2 rounded border ${formik.touched[field] && formik.errors[field] ? "border-red-500" : darkMode ? "border-gray-500 bg-[#252945] text-white" : "border-gray-300"
                                    }`}
                                {...formik.getFieldProps(field)}
                            />
                        ))}
                    </div>

                    {/* Project Description */}
                    <div className="mb-6">
                        <h3 className="text-lg mb-2">Project Description</h3>
                        <textarea
                            name="projectDescription"
                            placeholder="Project Description"
                            className={`w-full p-2 rounded border ${formik.touched.projectDescription && formik.errors.projectDescription ? "border-red-500" : darkMode ? "border-gray-500 bg-[#252945] text-white" : "border-gray-300"
                                }`}
                            {...formik.getFieldProps("projectDescription")}
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded ${darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-900"}`}
                            onClick={onClose}
                        >
                            Discard
                        </button>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className={`px-4 py-2 rounded ${darkMode ? "bg-blue-700 text-white" : "bg-blue-500 text-white"}`}
                            >
                                Save as Draft
                            </button>
                            <button
                                type="submit"
                                className={`px-4 py-2 rounded ${darkMode ? "bg-purple-700 text-white" : "bg-purple-600 text-white"}`}
                            >
                                Save & Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InvoiceForm;
