import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginContainer } from "../features/login/components/LoginContainer";
import { ContactFormContainer } from "../features/contact-form/components/ContactFormContainer";
import { ContactsContainer } from "../features/contacts/components/ContactsContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/contact-form" element={<ContactFormContainer />} />
        <Route path="/contacts" element={<ContactsContainer />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
