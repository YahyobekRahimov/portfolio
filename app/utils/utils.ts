export function getRandomNumber(min: number, max: number) {
  // Ensure that min and max are numbers
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  // Ensure that min is less than or equal to max
  if (min > max) {
    throw new Error(
      "Min value must be less than or equal to max value"
    );
  }

  // Generate and return a random number within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
