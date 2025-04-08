import React from "react";
import { toast } from "react-toastify";

export const validateLoginForm = (formData) => {
  if (!formData.userName || !formData.password) {
    toast.warning("Please enter both user name and password");
    return false;
  }

  if (formData.userName !== "dbeslic" || formData.password !== "Inicijalni1") {
    toast.error("You have entered wrong user name or password");
    return false;
  }

  toast.success("You have logged in successfully");
  return true;
};
