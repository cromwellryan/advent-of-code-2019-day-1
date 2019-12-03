import { calculate } from "./fuel-counter-upper";

describe("FuelCounterUpper", () => {
  it("For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.", () => {
    const fuelNeeded = calculate(12);

    expect(fuelNeeded).toBe(2);
  });

  it("For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.", () => {
    const fuelNeeded = calculate(14);

    expect(fuelNeeded).toBe(2);
  });

  it("For a mass of 1969, the fuel required is 654.", () => {
    const fuelNeeded = calculate(1969);

    expect(fuelNeeded).toBe(654);
  });

  it("For a mass of 100756, the fuel required is 33583.", () => {
    const fuelNeeded = calculate(100756);

    expect(fuelNeeded).toBe(33583);
  });

  it("For a mass of 0, the fuel requierd is o", () => {
    const fuelNeeded = calculate(0);

    expect(fuelNeeded).toBe(0);
  });
});
