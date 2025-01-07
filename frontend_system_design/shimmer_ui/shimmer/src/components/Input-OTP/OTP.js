import React, { useState, useRef, useEffect } from "react";
import "./style.css";

function OTP() {
  const [inputField, setInputField] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let otp = inputField.join("");
    alert(`OTP is verified ${otp}`);
  };

  function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputField.length) {
      const newInputField = [...inputField];
      newInputField.forEach((input, index) => {
        newInputField[index] = value[index];
      });
      setInputField(newInputField);
    }
  }
  const handleInputChange = (e, index) => {
    let value = e.target.value;
    let isValidInput = value.match(/[0-9]/gi);
    value = isValidInput ? value : "";
    const newInputField = [...inputField];
    newInputField[index] = value;
    setInputField(newInputField);
    if (value && index < inputField.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...inputField];
      if (!inputField[index] && index > 0) {
        // Move to the previous input if current is empty
        inputRefs.current[index - 1].focus();
      }
      updatedOtp[index] = ""; // Clear the current value
      setInputField(updatedOtp);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <h2>OTP Verification</h2>
          <p>Please enter the code we have sent you.</p>
        </div>
        <form>
          <div id="otp-container">
            {inputField.map((value, index) => (
              <input
                key={index} // key is misleading here, use index only if we add other than index backspace not working
                type="text"
                className="otp-number"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={(e) => handleOnPasteOtp(e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <div className="btn-container">
            <button onClick={handleFormSubmit} id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OTP;
