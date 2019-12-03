import { calculate as calculateFuel } from "./fuel-counter-upper";

import "./styles.css";

function toLinesOfMasses(listOfMasses) {
  return listOfMasses.split("\n");
}

function toNumericMass(massAsAString) {
  return Number.parseInt(massAsAString, 10) || 0;
}

function calculate() {
  const totalFuelNeeded = toLinesOfMasses(document.getElementById("mass").value)
    .map(toNumericMass)
    .map(mass => {
      const fuel = calculateFuel(mass);
      console.log(mass, fuel);
      return fuel;
    })
    .reduce((total, fuel) => total + fuel, 0);

  document.getElementById("fuel-needed").innerText = totalFuelNeeded.toString();
}

function init() {
  document.getElementById("theForm").addEventListener("submit", e => {
    calculate();
    e.preventDefault();
  });

  calculate();
}

if (document.readyState !== "loading") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
}
