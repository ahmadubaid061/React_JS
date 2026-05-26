import React from "react";

function CelsiusInput({ celsius, onCelsiusChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
      onCelsiusChange(value);
    }
  };

  return (
    <div className="input-group">
      <label className="input-label">Celsius (°C)</label>
      <input
        type="text"
        value={celsius}
        onChange={handleChange}
        placeholder="Enter temperature..."
        className="temperature-input"
      />
    </div>
  );
}

export default CelsiusInput;
