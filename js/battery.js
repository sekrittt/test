var z, h, m, s;
function getBatteryCharge() {
    navigator.getBattery().then(function (battery) {
        bl = (Math.floor(battery.level * 100)) + "%";
    });
    return bl;
}
function getIsChargingInfo() {
    navigator.getBattery().then(function (battery) {
        bc = battery.charging;
    });
    if (bc) {
        a = "заряжается";
    } else {
        a = "разряжается";
    }
    return a;
}
function getTimeCharging() {
    navigator.getBattery().then(function (battery) {
        bct = time(battery.chargingTime);
    });
    return bct;
}
function getTimeDischarging() {
    navigator.getBattery().then(function (battery) {
        bdt = time(battery.dischargingTime);
    });
    return bdt;
}
function time(t) {
    t = Math.floor(t);
    h = Math.floor(t/3600);
    m = Math.floor((t%3600)/60);
    s = Math.floor((t%3600)%60);
    return h + " часов " + m + " минут " + s + " секунд";
}