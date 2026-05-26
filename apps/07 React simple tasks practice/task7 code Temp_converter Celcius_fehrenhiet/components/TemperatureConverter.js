import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Convert Celsius to Fahrenheit
  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(1));
    }
  };

  // Convert Fahrenheit to Celsius
  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(1));
    }
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1 className="converter-title">Temperature Converter</h1>

        <div className="converter-content">
          <CelsiusInput
            celsius={celsius}
            onCelsiusChange={handleCelsiusChange}
          />

          <div className="equals-sign">=</div>

          <FahrenheitInput
            fahrenheit={fahrenheit}
            onFahrenheitChange={handleFahrenheitChange}
          />
        </div>

        <p className="converter-note">Enter temperature in either field</p>
      </div>
    </div>
  );
}

export default TemperatureConverter;
