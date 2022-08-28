const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((accumilator, currValue) => {
    return accumilator+currValue
}, 0);
console.log(totalBatteries)