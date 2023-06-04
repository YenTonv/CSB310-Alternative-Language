class Cell {
  constructor(oem, model, launchAnnounced, launchStatus, bodyDimensions, bodyWeight, bodySim, displayType, displaySize, displayResolution, featuresSensors, platformOs) {
    this.oem = oem;
    this.model = model;
    this.launchAnnounced = launchAnnounced;
    this.launchStatus = launchStatus;
    this.bodyDimensions = bodyDimensions;
    this.bodyWeight = bodyWeight;
    this.bodySim = bodySim;
    this.displayType = displayType;
    this.displaySize = displaySize;
    this.displayResolution = displayResolution;
    this.featuresSensors = featuresSensors;
    this.platformOs = platformOs;
  }

  // Getter and setter methods for class attributes

  getOEM() {
    return this.oem;
  }

  setOEM(oem) {
    this.oem = oem;
  }

  getModel() {
    return this.model;
  }

  setModel(model) {
    this.model = model;
  }

  getLaunchAnnounced() {
    return this.launchAnnounced;
  }

  setLaunchAnnounced(launchAnnounced) {
    this.launchAnnounced = launchAnnounced;
  }

  getLaunchStatus() {
    return this.launchStatus;
  }

  setLaunchStatus(launchStatus) {
    this.launchStatus = launchStatus;
  }

  getBodyDimensions() {
    return this.bodyDimensions;
  }

  setBodyDimensions(bodyDimensions) {
    this.bodyDimensions = bodyDimensions;
  }

  getBodyWeight() {
    return this.bodyWeight;
  }

  setBodyWeight(bodyWeight) {
    this.bodyWeight = bodyWeight;
  }

  getBodySim() {
    return this.bodySim;
  }

  setBodySim(bodySim) {
    this.bodySim = bodySim;
  }

  getDisplayType() {
    return this.displayType;
  }

  setDisplayType(displayType) {
    this.displayType = displayType;
  }

  getDisplaySize() {
    return this.displaySize;
  }

  setDisplaySize(displaySize) {
    this.displaySize = displaySize;
  }

  getDisplayResolution() {
    return this.displayResolution;
  }

  setDisplayResolution(displayResolution) {
    this.displayResolution = displayResolution;
  }

  getFeaturesSensors() {
    return this.featuresSensors;
  }

  setFeaturesSensors(featuresSensors) {
    this.featuresSensors = featuresSensors;
  }

  getPlatformOS() {
    return this.platformOs;
  }

  setPlatformOS(platformOs) {
    this.platformOs = platformOs;
  }

  toString() {
    // Convert object details to a string for printing
    return `OEM: ${this.oem}\n` +
      `Model: ${this.model}\n` +
      `Launch Announced: ${this.launchAnnounced}\n` +
      `Launch Status: ${this.launchStatus}\n` +
      `Body Dimensions: ${this.bodyDimensions}\n` +
      `Body Weight: ${this.bodyWeight}\n` +
      `Body SIM: ${this.bodySim}\n` +
      `Display Type: ${this.displayType}\n` +
      `Display Size: ${this.displaySize}\n` +
      `Display Resolution: ${this.displayResolution}\n` +
      `Features & Sensors: ${this.featuresSensors}\n` +
      `Platform OS: ${this.platformOs}`;
  }

  calculateBodyWeightPercentile(cellMap) {
    const bodyWeights = [];
    const targetBodyWeight = this.bodyWeight;

    // Iterate over the values of the cellMap and collect body weights
    for (const cell of cellMap.values()) {
      if (cell.bodyWeight !== null) {
        bodyWeights.push(cell.bodyWeight);
      }
    }

    // Sort the bodyWeights array in ascending order
    bodyWeights.sort((a, b) => a - b);

    // Find the index of the targetBodyWeight in the sorted array
    const index = bodyWeights.indexOf(targetBodyWeight);

    if (index !== -1) {
      // Calculate the percentile based on the index position
      const percentile = (index / (bodyWeights.length - 1)) * 100;
      // Round the percentile to two decimal places
      const roundedPercentile = Math.round(percentile * 100) / 100;
      return `${roundedPercentile.toFixed(2)}%`; // Return as a string with two decimal places and the percentage symbol
    } else {
        return null;
    }
  }

  countSameOEMCells(cellMap) {
    const currentOEM = this.oem;
    let count = 0;

    // Iterate over the values of the cellMap and count cells with the same OEM
    for (const cell of cellMap.values()) {
      if (cell.oem === currentOEM) {
        count++;
      }
    }

    return count;
  }

  countSameModelCells(cellMap) {
    const currentModel = this.model;
    let count = 0;

    // Iterate over the values of the cellMap and count cells with the same launch year
    for (const cell of cellMap.values()) {
      if (cell.model === currentModel) {
        count++;
      }
    }

    return count;
  }

  countSameLaunchYearCells(cellMap) {
    const currentLaunchYear = this.launchAnnounced;
    let count = 0;

    // Iterate over the values of the cellMap and count cells with the same launch year
    for (const cell of cellMap.values()) {
      if (cell.launchAnnounced === currentLaunchYear) {
        count++;
      }
    }

    return count;
  }

  countSameBodySimCells(cellMap) {
    const currentBodySim = this.bodySim;
    let count = 0;

    // Iterate over the values of the cellMap and count cells with the same bodySim
    for (const cell of cellMap.values()) {
      if (cell.bodySim === currentBodySim) {
        count++;
      }
    }

    return count;
  }

  isThisPhoneStillAvailable() {
    const currentLaunchStatus = this.launchStatus;
    if (currentLaunchStatus == "Discontinued" || currentLaunchStatus == "Cancelled")
      return false;
    return true;
  }

  hasMultipleSensors() {
    const sensors = this.featuresSensors.split(",");
    return sensors.length > 1;
  }

}