  function processData(file) {
    // Create a HashMap to store Cell objects
    const cellMap = new Map();

    // If file is empty, stop here
    if (file == "") return null;

    // Split the rows by line break
    const rowData = file.split('\n');


    // Loop on the row Array
    for (var row = 1; row < rowData.length; row++) {

         // Use regex to split the row data while ignoring commas within double quotes
        rowColData = rowData[row].match(/(?:[^,"]+|"(?:[^"]|"")*")|(?<=,|^)(?=,|$)/g);

        // Replace "-" with null
        for (var rowCol = 0; rowCol < rowColData.length; rowCol++) {
          if (rowColData[rowCol] === "-" || rowColData[rowCol] === "" || rowColData[rowCol] === null || rowColData[rowCol] === "\r" || typeof rowColData[rowCol] === "undefined") {
            rowColData[rowCol] = "";
          }
        }
         // Create a new Cell object with the parsed values
        const cell = new Cell(
          rowColData[0],
          rowColData[1],
          transformToIntegerYear(rowColData[2]),
          transformToYearOrStatus(rowColData[3]),
          rowColData[4],
          transformToFloatGrams(rowColData[5]),
          handleNoValue(rowColData[6]),
          rowColData[7],
          transformToFloatInches(rowColData[8]),
          rowColData[9],
          handleInvalidValue(rowColData[10]),
          shortenPlatformOS(rowColData[11])
        );

        // Set the Cell object in the cellMap using row as the key
        cellMap.set(row, cell);
    }
    
    return cellMap;
  }
            
  // Helper functions for data transformations
  //find 4 continuous digit, then change them to integer 
  function transformToIntegerYear(value) {
    const yearRegex = /\d{4}/;
    const yearMatch = value.match(yearRegex);
    if (yearMatch && yearMatch.length > 0) {
      return parseInt(yearMatch[0], 10);
    }
    return null;
  }

  //find 4 continuous digit, then replace the original data with the 4 digits, if these are not found, but return null unless data is "discontinied" or "canceled"
  function transformToYearOrStatus(value) {
    const yearRegex = /\d{4}/;
    const yearMatch = value.match(yearRegex);

    if (yearMatch && yearMatch.length > 0) {
      return yearMatch[0];
    } else if (value === 'Discontinued' || value === 'Cancelled') {
      return value;
    } else {
      return null;
    }
  }
  
  //find digits before "g" and change them to float
  function transformToFloatGrams(value) {
    const gramsRegex = /(\d+(\.\d+)?)\s*g\b/;
    const gramsMatch = value.match(gramsRegex);

    if (gramsMatch && gramsMatch.length > 0) {
      return parseFloat(gramsMatch[1]);
    } else {
      return null;
    }
  }

  //handle invalid value
  function handleNoValue(value) {
    if (value === "No" || value === "Yes") {
      return null;
    } else {
      return value;
    }
  }

  //find digits before inches, change them to float
  function transformToFloatInches(value) {
    const inchesRegex = /(\d+(\.\d+)?)\s*inches\b/;
    const inchesMatch = value.match(inchesRegex);

    if (inchesMatch && inchesMatch.length > 0) {
      return parseFloat(inchesMatch[1]);
    } else {
      return null;
    }
  }

  //handle invalid value
  function handleInvalidValue(value) {
    if (/^\d+(\.\d+)?$/.test(value)) {
      return null;
    } else {
      return value;
    }
  }

  //shorten data
  function shortenPlatformOS(value) {
    if (/^\d+(\.\d+)?$/.test(value)) {
      return null;
    } else {
        const commaIndex = value.indexOf(',');
        if (commaIndex !== -1) {
          return value.slice(0, commaIndex).trim();
        } else {
          return value.trim();
      }
    }
  }

  //count any cells that has only one sensor
  //runtime O(n)
  function countPhonesWithOneSensor(cellMap) {
    let count = 0;

    for (const cell of cellMap.values()) {
      if (!cell.hasMultipleSensors()) {
        count++;
      }
  }

  return count;
  }

  //find the highest average phone's body weight of each company
  //runtime O(n)
  function highestAverageWeight(cellMap){
    const weightMap = new Map();

    for (const [rowId, cell] of cellMap.entries()) {
      const oem = cell.oem;
      const bodyWeight = cell.bodyWeight;

      if (weightMap.has(oem)) {
        const { weightSum, count } = weightMap.get(oem);
        weightMap.set(oem, { weightSum: weightSum + bodyWeight, count: count + 1 });
      } else {
        weightMap.set(oem, { weightSum: bodyWeight, count: 1 });
      }
    }

    const averageWeights = new Map();

    for (const [oem, { weightSum, count }] of weightMap) {
      const averageWeight = weightSum / count;
      averageWeights.set(oem, averageWeight);
    }

    let highestAverageWeight = 0;
    let highestAverageWeightCompany = '';

    for (const [oem, averageWeight] of averageWeights) {
      if (averageWeight > highestAverageWeight) {
        highestAverageWeight = averageWeight;
        highestAverageWeightCompany = oem;
      }
    }

    console.log(`The company with the highest average weight of the phone body is: ${highestAverageWeightCompany}`);
    console.log(`Average weight: ${highestAverageWeight}`);
  }

  //find phones that have different announced and released years
  //runtime O(n)
  function differentYearAnnouncedReleased(cellMap){
    // Array to store phones with different announcement and release years
    const phonesWithDifferentYears = [];

      for (const [rowId, cell] of cellMap.entries()) {
        const oem = cell.oem;
        const model = cell.model;
        const launchAnnounced = cell.launchAnnounced;
        const launchStatus = cell.launchStatus;

        if (launchStatus !== "Discontinued" && launchStatus !== "Cancelled") {
          const yearRegex = /\d{4}/; // Regular expression to match 4-digit year
          const yearMatch = launchStatus.match(yearRegex);
          
          if (yearMatch && yearMatch.length > 0 && parseInt(yearMatch[0], 10) !== launchAnnounced) {
            phonesWithDifferentYears.push({ oem, model, launchAnnounced, launchStatus });
          }
        }
      }

      if (phonesWithDifferentYears.length > 0) {
        console.log("Phones with different announcement and release years:");
        for (const phone of phonesWithDifferentYears) {
          console.log(`OEM: ${phone.oem}, Model: ${phone.model}`);
          console.log(`   Announced Year: ${phone.launchAnnounced}, Release Year: ${phone.launchStatus}`);
        }
      } else {
        console.log("No phones were announced in one year and released in another.");
      }
  }

  //find the year that has the most phones launced
  //runtime O(n)
  function findYearWithMostPhonesLaunched(cellMap) {
    const counter = {};
    // Iterate over the cellMap to count phones launched in each year
    for (const [rowId, cell] of cellMap.entries()) {
      const launchYear = cell.launchStatus;

      if (launchYear !== "Discontinued" && launchYear !== "Cancelled") {
          const yearRegex = /\d{4}/; // Regular expression to match 4-digit year
          const yearMatch = launchYear.match(yearRegex);
          
          if (yearMatch && yearMatch.length > 0) {
            const launchYear = parseInt(yearMatch[0], 10);            
          }
      }
      // Check if the launch year is within the 2000s
      if (launchYear >= 2000) {
        if (counter[launchYear]) {
          counter[launchYear]++;
        } else {
          counter[launchYear] = 1;
        }
      }
    }

    let maxCount = 0;
    let maxYear = null;

    // Find the year with the maximum count
    for (const year in counter) {
      const count = counter[year];
      
      if (count > maxCount) {
        maxCount = count;
        maxYear = year;
      }
    }

    return maxYear;
  }