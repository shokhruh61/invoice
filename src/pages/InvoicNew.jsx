import React from 'react'
import { useDarkMode } from "../context/DarkLightMode";

function InvoicNew() {
    const { darkMode } = useDarkMode();
    const bgClass = darkMode ? "bg-slate-950" : "bg-slate-200";

    return (
        <div
            className={`${bgClass} h-[100vh] w-full pl-4 xs:pl-6 sm:pl-12 md:pl-24 lg:pl-32 pr-4 xs:pr-6 sm:pr-12 md:pr-28 ${darkMode ? 'text-white' : ''
                }`}
        >
            hellojsjsj
        </div>
    )
}

export default InvoicNew
