// Create a sample cell for testing
const myCell = new Cell(
  "Samsung",
  "Galaxy",
  2012,
  "2012",
  "150 x 70 x 8 mm",
  74.5,
  "Nano-SIM",
  "Super AMOLED",
  6.5,
  "1080 x 2400 pixels",
  "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
  "Android 12"
);

const cell1 = new Cell(
  "Apple",
  "iPhone",
  2010,
  "2012",
  "100 x 70 x 8 mm",
  60.5,
  "Nano-SIM",
  "Super AMOLED",
  6.5,
  "1170 x 2532 pixels",
  "Face ID, accelerometer, gyro, proximity, compass, barometer",
  "iOS 15"
);

const cell2 = new Cell(
  "Samsung",
  "Galaxy",
  2009,
  "2009",
  "160 x 90 x 8 mm",
  90.5,
  "Nano-SIM",
  "Super AMOLED",
  7.5,
  "1440 x 3200 pixels",
  "Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass",
  "Android 12"
);

const expectedMyCell = `OEM: Samsung
Model: Galaxy
Launch Announced: 2012
Launch Status: 2012
Body Dimensions: 150 x 70 x 8 mm
Body Weight: 74.5
Body SIM: Nano-SIM
Display Type: Super AMOLED
Display Size: 6.5
Display Resolution: 1080 x 2400 pixels
Features & Sensors: Fingerprint (under display, optical), accelerometer, gyro, proximity, compass
Platform OS: Android 12`;


// Test the toString method
console.log(`testToString: ${myCell.toString()}`);
console.log(myCell.toString() === expectedMyCell); // Expected output: true


// Create a cell map with other cells
const cellMap = new Map();
cellMap.set(1, myCell);
cellMap.set(2, cell1);
cellMap.set(3, cell2);


// Test the calculateBodyWeightPercentile method
const bodyWeightPercentile = myCell.calculateBodyWeightPercentile(cellMap);
console.log(`Body Weight Percentile: ${bodyWeightPercentile}`);
console.log(bodyWeightPercentile === '50.00%'); // Expected output: true


// Test the countSameOEMCells method
const sameOEMCount = myCell.countSameOEMCells(cellMap);
console.log(`Number of cells with the same OEM: ${sameOEMCount}`);
console.log(sameOEMCount === 2); // Expected output: true

// Test the countSameModelCells method
const sameModelCount = myCell.countSameModelCells(cellMap);
console.log(`Number of cells with the same model: ${sameModelCount}`);
console.log(sameModelCount === 2); // Expected output: true

// Test the countSameLaunchYearCells method
const sameLaunchYearCount = myCell.countSameLaunchYearCells(cellMap);
console.log(`Number of cells with the same launch year: ${sameLaunchYearCount}`);
console.log(sameLaunchYearCount === 1); // Expected output: true

// Test the countSameBodySimCells method
const sameBodySimCount = myCell.countSameBodySimCells(cellMap);
console.log(`Number of cells with the same bodySim: ${sameBodySimCount}`);
console.log(sameBodySimCount === 3); // Expected output: true

// Test the isThisPhoneStillAvailable method
const isAvailable = myCell.isThisPhoneStillAvailable();
console.log(`Still available? ${isAvailable}`);
console.log(isAvailable === true); // Expected output: true

// Test the hasMultipleSensors method
const haveMultipleSensors = myCell.hasMultipleSensors();
console.log(`Does it has multiple sensors? ${haveMultipleSensors}`);
console.log(haveMultipleSensors === true); // Expected output: true
