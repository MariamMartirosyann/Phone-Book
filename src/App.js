

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../src/app/Components/HomePage'
import EditContact from './app/Components/EditContact';
import Addcontact from './app/Components/Addcontact';


function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="addContact" element={<Addcontact />} />
          <Route path="editContact/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
