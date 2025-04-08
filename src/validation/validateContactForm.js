import React from "react";
import { validateEmail } from "./validateEmail";
import { toast } from "react-toastify";

export const validateContactForm = (formData) => {
  const { firstName, lastName, oib, contactType, email, phone } = formData;

  if (contactType === "email" && !validateEmail(email)) {
    toast.error("Email address is incorrect!");
    return false;
  }

  if (oib && oib.toString().length !== 11) {
    toast.error("Your OIB has to contain 11 digits");
    return false;
  }

  if (!firstName || !lastName || !oib || !contactType || !(email || phone)) {
    toast.warning("Please fill all form elements.");
    return false;
  }

  toast.success("Form is successfully submitted");
  return true;
};
