import React, { useState } from "react";
import { Login } from "./Login";
import { INIT_STATE_FORM_DATA } from "../../../constants/initState";
import { Center } from "../../../ui/Center";

export const LoginContainer = () => {
  const [formData, setFormData] = useState(INIT_STATE_FORM_DATA);

  return (
    <Center>
      <Login formData={formData} setFormData={setFormData} />
    </Center>
  );
};
