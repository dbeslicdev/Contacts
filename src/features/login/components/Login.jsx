import { Button, Card, Checkbox, Form, Input } from "antd";
import React from "react";
import { INIT_STATE_FORM_DATA } from "../../../constants/initState";

export const Login = ({ formData, setFormData }) => {
  const handleFieldChange = ({ target: { name, value, checked, type } }) => {
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleClear = () => {
    setFormData(INIT_STATE_FORM_DATA);
  };

  const handleSubmit = () => {
    console.log(formData, "frmdt");
  };
  return (
    <Card>
      <Form>
        <Form.Item label="Username">
          <Input
            name="userName"
            value={formData.userName}
            onChange={handleFieldChange}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            name="password"
            value={formData.password}
            onChange={handleFieldChange}
          />
        </Form.Item>
        <Form.Item label="Remember me">
          <Checkbox
            name="remember"
            checked={formData.remember}
            onChange={handleFieldChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ marginRight: "1rem" }}
          >
            Log in
          </Button>
          <Button onClick={handleClear}>Clear</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
