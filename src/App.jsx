import React from 'react';
import MainLayouts from './layouts/MainLayouts';
import { DarkModeProvider } from './context/DarkLightMode.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import InvoiceDetails from './pages/InvoiceDetails.jsx'
import NewInvoic from './pages/NewInvoic.jsx';
function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={
          <MainLayouts>
            <Home />
          </MainLayouts>
        } />

        <Route path="/invoice/:id" element={
          <MainLayouts>
            <InvoiceDetails />
          </MainLayouts>
        } />
        <Route path='/new' element={<MainLayouts>
          <NewInvoic />
        </MainLayouts>} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
