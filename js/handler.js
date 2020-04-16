var greetings = [
    "Hello!",
    "Привет!",
    "Приветствую",
    "Дарова!",
    "Хай!",
    "Хэй!"
];
var wwo = [];
function getBatteryInfo(task) {
    if (task.search("статус") !== -1) {
        answer = "Сейчас батарея "+getIsChargingInfo();
    } else if (task.search("заряд") !== -1) {
        answer = "Заряд батареи равен "+getBatteryCharge();
    } else if (task.search("сколько") !== -1 && task.search("до") !== -1 && task.search("полной") !== -1 && task.search("зарядки") !== -1 && task.search("осталось") !== -1) {
        answer = "До полной зарядки осталось примерно "+getTimeCharging();
    } else if (task.search("сколько") !== -1 && task.search("до") !== -1 && task.search("полной") !== -1 && task.search("разрядки") !== -1 && task.search("осталось") !== -1) {
        answer = "До полной разрядки осталось примерно "+getTimeDischarging();
    } else {
        break;
    }
    return answer;
}
function handler(task) {
    var task = task.toLowerCase();
    var answer = "";
    //****************** Обработка ******************\\
    if (task.search("ясень") !== -1){
        task = task.replace("ясень", "");
        task = task.trim();
        if (task.search("привет") !== -1 || task.search("hello") !== -1) {
            answer = answer = greetings[Math.floor(Math.random() * greetings.length)];
        } else if (task.search("открыть") !== -1 || task.search("open") !== -1 || task.search("открой") !== -1) {
            answer = openWindow(task);
        } else if (task.search("найти") !== -1 || task.search("найди") !== -1 || task.search("ищи") !== -1 || task.search("поищи") !== -1 || task.search("find") !== -1 || (task.search("займись") !== -1 && task.search("поиском") !== -1) || task.search("поиск") !== -1) {
            answer = search(task)
        } else if (task.search("покажи") !== -1 || task.search("скажи") !== -1 || task.search("батаре") !== -1) {
            answer = getBatteryInfo(task);
        } else if ((task.search("обнови") !== -1 || task.search("перезагрузи") !== -1) && task.search("страницу") !== -1) {
            answer = "Секунду";
            setTimeout(()=>{location.href=location.href},2000)
        } else if ((task.search("очисти") !== -1 || task.search("очистить") !== -1) && (task.search("диалог") !== -1 || (task.search("поле") !== -1 && task.search("сообщений") !== -1))) {
            document.getElementById("chat").innerHTML = "";
            answer = "Очистил";
        } else {
            answer = "Я вас не понял";
        }
        return answer;
    }
}
