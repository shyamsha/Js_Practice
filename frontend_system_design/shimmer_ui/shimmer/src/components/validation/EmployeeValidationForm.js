// example of validation efficiently on inputs

import React, { useState } from "react";
const initialValues = { name: "", email: "", employeeId: "", joiningDate: "" };
const initialErrors = {
  name: true,
  email: true,
  employeeId: true,
  joiningDate: true,
};
function EmployeeValidationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const nameRegex = /^[a-zA-Z]{4,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const employeeIdRegex = /^[0-9]{6}$/;

  const validateFields = (name, value) => {
    let isValid = false;
    switch (name) {
      case "name":
        isValid = !nameRegex.test(value);
        break;
      case "email":
        isValid = !emailRegex.test(value);
        break;
      case "employeeId":
        isValid = !employeeIdRegex.test(value);
        break;
      case "joiningDate":
        const today = new Date();
        const inputDate = new Date(value);
        isValid = !(inputDate < today);
        break;
      default:
        break;
    }
    // console.log(isValid)
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let isFieldValid = validateFields(name, value);

    setErrors({
      ...errors,
      [name]: isFieldValid,
    });
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(errors);
  const handleSubmit = () => {
    setValues(initialValues);
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={values.name}
          onChange={(e) => handleInputChange(e)}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {errors.name && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          onChange={handleInputChange}
          value={values.empId}
          placeholder="Employee ID"
        />
        {errors.employeeId && (
          <p className="error mt-2">Employee ID must be exactly 6 digits</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={values.joinDate}
          onChange={handleInputChange}
          placeholder="Joining Date"
        />
        {errors.joiningDate && (
          <p className="error mt-2">Joining Date cannot be in the future</p>
        )}
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        onClick={handleSubmit}
        disabled={Object.values(errors).every(Boolean)}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
