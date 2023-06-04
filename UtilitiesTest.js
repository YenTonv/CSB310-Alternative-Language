// Test the processData function
function testProcessData() {
  const file = "";
  const result = processData(file);
  console.log(`testProcessData: ${result}`);
  console.log(result === null); // Expected output: true

}

// Test the transformToIntegerYear function
function testTransformToIntegerYear() {
  const value = "2022";
  const result = transformToIntegerYear(value);
  console.log(`testTransformToIntegerYear: ${result}`);
  console.log(result === 2022); // Expected output: true

}

// Test the transformToYearOrStatus function
function testTransformToYearOrStatus() {
  const value1 = "2022";
  const result1 = transformToYearOrStatus(value1);
  console.log(`testTransformToYearOrStatus with input of 2022: ${result1}`);
  console.log(result1 === "2022"); // Expected output: true

  const value2 = "Discontinued";
  const result2 = transformToYearOrStatus(value2);
  console.log(`testTransformToYearOrStatus with discontinued: ${result2}`);
  console.log(result2 === value2); // Expected output: true
}

// Test the transformToFloatGrams function
function testTransformToFloatGrams() {
  const value = "150.5 g";
  const result = transformToFloatGrams(value);
  console.log(`testTransformToFloatGrams with regular input: ${result}`);
  console.log(result === 150.5); // Expected output: true

  const value1 = "-";
  const result1 = transformToFloatGrams(value1);
  console.log(`testTransformToFloatGrams with hyphen input: ${result1}`);
  console.log(result1 === null); // Expected output: true

}

// Test the handleNoValue function
function testHandleNoValue() {
  const value1 = "No";
  const result1 = handleNoValue(value1);
  console.log(`testHandleNoValue with No input: ${result1}`);
  console.log(result1 === null); // Expected output: true

  const value2 = "Yes";
  const result2 = handleNoValue(value2);
  console.log(`testHandleNoValue with Yes input: ${result2}`);
  console.log(result2 === null); // Expected output: true

  const value3 = "Dual SIM";
  const result3 = handleNoValue(value3);
  console.log(`testHandleNoValue with regular input: ${result3}`);
  console.log(result3 === value3); // Expected output: true

}

// Test the transformToFloatInches function
function testTransformToFloatInches() {
  const value = "5.8 inches";
  const result = transformToFloatInches(value);
  console.log(`testTransformToFloatInches with "5.8 inches" input: ${result}`);
  console.log(result === 5.8); // Expected output: true

}

// Call the test functions
testProcessData();
testTransformToIntegerYear();
testTransformToYearOrStatus();
testTransformToFloatGrams();
testHandleNoValue();
testTransformToFloatInches();
