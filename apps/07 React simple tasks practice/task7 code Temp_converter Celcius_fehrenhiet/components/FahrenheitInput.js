import React from "react";

function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
      onFahrenheitChange(value);
    }
  };

  return (
    <div className="input-group">
      <label className="input-label">Fahrenheit (°F)</label>
      <input
        type="text"
        value={fahrenheit}
        onChange={handleChange}
        placeholder="Enter temperature..."
        className="temperature-input"
      />
    </div>
  );
}

export default FahrenheitInput;
