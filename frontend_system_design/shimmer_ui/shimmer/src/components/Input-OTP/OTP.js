import React, { useState } from "react";
import "./style.css";

function OTP() {
  const [inputField, setInputField] = useState({});
  const [otpLength, setOtpLength] = useState(6);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputField);
    alert("OTP submitted");
  };
  function handleOtp(e) {
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";
    console.log(input.value);

    //  const fieldIndex = input.dataset.index;
    //   if (fieldIndex < inputs.length - 1 && isValidInput) {
    //     input.nextElementSibling.focus();
    //   }
    //   if (e.key === "Backspace" && fieldIndex > 0) {
    //     input.previousElementSibling.focus();
    //   }

    //   if (fieldIndex == inputs.length - 1) {
    //     console.log("Button activated");
    //     submitButton.style.background = "#18d395";
    //     submitButton.style.cursor = "pointer";
    //   }
  }

  function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    //console.log(value);

    // if (value.length === inputs.length) {
    //   inputs.forEach((input, index) => (input.value = value[index]));
    //   submitButton.style.background = "#18d395";
    //   submitButton.style.cursor = "pointer";
    // }
  }
  const handleInputChange = (event) => {
    let data = { ...inputField };
    data[event.target.name] = event.target.value;

    // let isValidInput = data.match(/[0-9]/gi) || true;
    const fieldIndex = Object.values(data).length;
    if (fieldIndex < otpLength && true) {
      // input.nextElementSibling.focus();
    }
    if (event.key === "Backspace" && fieldIndex > 0) {
      // input.previousElementSibling.focus();
    }
    setInputField(data);
  };

  console.log(inputField);

  return (
    <>
      <div className="wrapper">
        <div className="heading">
          <h2>OTP Verification</h2>
          <p>Please enter the code we have sent you.</p>
        </div>
        <form>
          <div id="otp-container">
            <input
              type="text"
              placeholder="1"
              className="otp-number"
              minLength="1"
              maxLength="1"
              name="0"
              onChange={(event) => handleInputChange(event)}
              value={inputField["0"] || ""}
              // onKeyUp={handleOtp}
              // onPaste={handleOnPasteOtp}
            />
            <input
              type="text"
              placeholder="2"
              className="otp-number"
              minLength="1"
              maxLength="1"
              name="1"
              value={inputField["1"] || ""}
              onChange={(event) => handleInputChange(event)}
              // onKeyUp={handleOtp}
              // onPaste={handleOnPasteOtp}
            />
            <input
              type="text"
              placeholder="3"
              className="otp-number"
              minLength="1"
              maxLength="1"
              name="2"
              onChange={(event) => handleInputChange(event)}

              // onKeyUp={handleOtp}
              // onPaste={handleOnPasteOtp}
            />
            <input
              type="text"
              placeholder="4"
              className="otp-number"
              minLength="1"
              maxLength="1"
              name="3"
              onChange={(event) => handleInputChange(event)}

              // onKeyUp={handleOtp}
              // onPaste={handleOnPasteOtp}
            />
            <input
              type="text"
              placeholder="5"
              className="otp-number"
              minLength="1"
              maxLength="1"
              name="4"
              onChange={(event) => handleInputChange(event)}

              // onKeyUp={handleOtp}
              // onPaste={handleOnPasteOtp}
            />
            <input
              type="text"
              placeholder="6"
              className="otp-number"
              minLength="1"
              maxLength="1"
              name="5"
              onChange={(event) => handleInputChange(event)}

              // onKeyUp={handleOtp}
              // onPaste={handleOnPasteOtp}
            />
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
