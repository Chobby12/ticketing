"use strict";
let currentTime;
let oneMin = 1000 * 60, oneHour = oneMin * 60, halfHour = oneHour / 2, fiftenMins = halfHour / 2, fiveMins = oneMin * 5;
let record = {
    startedAt: '',
    stoppedAt: '',
};
function setTime() {
    let day = new Date();
    return `${day.toLocaleTimeString()}`;
}
function clock() {
    currentTime = setInterval(setTime, 1000);
    console.log(`Started: ${setTime()}!`);
    record.startedAt = setTime();
}
function timeReached() {
    record.stoppedAt = setTime();
    clearInterval(currentTime);
    console.log(record);
    console.log(`Stoppage: ${setTime()}!`);
    return record;
}
clock();
setTimeout(timeReached, oneHour * 4);
//# sourceMappingURL=timer.js.map