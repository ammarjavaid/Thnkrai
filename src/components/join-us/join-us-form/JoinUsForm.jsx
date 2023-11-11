import React, { useState } from "react";
import "./join-us-form.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Button from "../../../common/button/Button";

const JoinUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({ name: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submut");
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      window.open(
        `mailto:contact@thnkrai.com?&subject=${formData.name}&body=${formData.email}`,
        "_blank"
      );

      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <>
      <div className="join-us-form">
        <div className="container">
          <div className="content">
            <div className="content-left">
              <h3>
                Sign up for early access to <span>our beta!</span>
              </h3>
              <p>
                Join us now for early access to our pricing model beta. Gain a
                competitive edge by accurately determining fair prices for all
                the products you want in a rapidly changing market.
              </p>
              <div className="address">
                <MdOutlineLocationOn className="address-icon" />
                Washington DC, US
              </div>
              <div className="email">
                <BsFillEnvelopeFill className="email-icon" />
                contact@thnkrai.com
              </div>
            </div>
            <div className="content-right">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label> Name </label>
                  <input
                    type="text"
                    placeholder="Enter name..."
                    className="input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="input-group">
                  <label> Email </label>
                  <input
                    type="email"
                    placeholder="Enter email..."
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                  <div className="btn-contact">
                    <Button type="submit"> Sign up </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUsForm;
