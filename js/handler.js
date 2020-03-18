var greetings = [
    "Hello!",
    "Привет!",
    "Приветствую",
    "Дарова!",
    "Хай!",
    "Хэй!"
];
function handler(task) {
    var task = task.toLowerCase();
    var answer = "";
    //****************** Обработка ******************\\
    if (task.search("открыть") !== -1 || task.search("open") !== -1 || task.search("открой") !== -1) {
        if (task.search("гугл") !== -1 || task.search("google") !== -1) {
            answer = "Уже открываю";
            window.open("https://google.com/");
        } else if (task.search("вконтакте") !== -1 || task.search("vk") !== -1) {
            answer = "Уже открываю";
            window.open("https://vk.com/");
        } else if (task.search("яндекс") !== -1 || task.search("yandex") !== -1) {
            answer = "Уже открываю";
            window.open("https://yandex.ru/");
        } else if (task.search("youtube") !== -1 || task.search("ютуб") !== -1) {
            answer = "Уже открываю";
            window.open("https://youtube.com/");
        } else if (task.search("вики") !== -1 || task.search("википедию") !== -1) {
            answer = "Уже открываю";
            window.open("https://ru.wikipedia.org/wiki/");
        } else {
            answer = "Я вас не понял";
        }
    } else if (task.search("привет") !== -1 || task.search("hello") !== -1) {
        answer = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (task.search("найти") !== -1 || task.search("найди") !== -1 || task.search("ищи") !== -1 || task.search("поищи") !== -1 || task.search("find") !== -1 || (task.search("займись") !== -1 && task.search("поиском") !== -1) || task.search("поиск") !== -1) {
        if ((task.search("в") !== -1 && task.search("гугл") !== -1) || task.search("google") !== -1) {
            task = task.replace("find", "");
            task = task.replace("найти", "");
            task = task.replace("найди", "");
            task = task.replace("ищи", "");
            task = task.replace("поищи", "");
            task = task.replace("займись", "");
            task = task.replace("поиском", "");
            task = task.replace("поиск", "");
            task = task.replace("в", "");
            task = task.replace("гугл", "");
            task = task.replace("google", "");
            task = task.trim();
            while (task.search(" ") !== -1) {
                task = task.replace(task[task.search(" ")], "+");
            }
            window.open("https://www.google.com/search?ei=0Z1xXuy_M6WrrgTxkJSIDw&q="+task);
            answer = "Уже ищю";
        } else if ((task.search("в") !== -1 && task.search("яндекс") !== -1) || task.search("yandex") !== -1) {
            task = task.replace("find", "");
            task = task.replace("найти", "");
            task = task.replace("найди", "");
            task = task.replace("ищи", "");
            task = task.replace("поищи", "");
            task = task.replace("займись", "");
            task = task.replace("поиском", "");
            task = task.replace("поиск", "");
            task = task.replace("в", "");
            task = task.replace("яндекс", "");
            task = task.replace("yandex", "");
            task = task.trim();
            while (task.search(" ") !== -1) {
                task = task.replace(task[task.search(" ")], "%20");
            }
            window.open("https://yandex.ru/search/?lr=50&text="+task);
            answer = "Уже ищю";
        } else if ((task.search("в") !== -1 && task.search("ютуб") !== -1) || task.search("youtube") !== -1) {
            task = task.replace("find", "");
            task = task.replace("найти", "");
            task = task.replace("найди", "");
            task = task.replace("ищи", "");
            task = task.replace("поищи", "");
            task = task.replace("займись", "");
            task = task.replace("поиском", "");
            task = task.replace("поиск", "");
            task = task.replace("в", "");
            task = task.replace("ютуб", "");
            task = task.replace("youtube", "");
            task = task.trim();
            while (task.search(" ") !== -1) {
                task = task.replace(task[task.search(" ")], "+");
            }
            window.open("https://www.youtube.com/results?search_query="+task);
            answer = "Уже ищю";
        } else if ((task.search("в") !== -1 && task.search("вики") !== -1) || task.search("википедии") !== -1) {
            task = task.replace("find", "");
            task = task.replace("найти", "");
            task = task.replace("найди", "");
            task = task.replace("ищи", "");
            task = task.replace("поищи", "");
            task = task.replace("займись", "");
            task = task.replace("поиском", "");
            task = task.replace("поиск", "");
            task = task.replace("в", "");
            task = task.replace("википедии", "");
            task = task.replace("вики", "");
            task = task.trim();
            while (task.search(" ") !== -1) {
                task = task.replace(task[task.search(" ")], "+");
            }
            window.open("https://ru.wikipedia.org/w/index.php?title=%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F%3A%D0%9F%D0%BE%D0%B8%D1%81%D0%BA&go=%D0%9F%D0%B5%D1%80%D0%B5%D0%B9%D1%82%D0%B8&ns0=1&search="+task);
            answer = "Уже ищю";
        } else {
            answer = "Я вас не понял";
        }
    } else if ((task.search("очистить") !== -1 || task.search("очисти") !== -1) && ((task.search("поле") !== -1 && task.search("сообщений") !== -1) || (task.search("диалог") !== -1))){
        document.getElementById("chat").innerHTML = "";
        answer = "Очистил";
    } else if ((task.search("покажи") !== -1 || task.search("скажи") !== -1) && (task.search("статус") !== -1 || task.search("status") !== -1) && task.search("батареи") !== -1 || task.search("battery") !== -1){
        answer = "Сейчас батарея "+getIsChargingInfo();
    } else if ((task.search("покажи") !== -1 || task.search("скажи") !== -1) && task.search("сколько") !== -1 && task.search("до") !== -1 && task.search("полной") !== -1 && task.search("зарядки") !== -1 && task.search("батареи") !== -1){
        answer = "До полной зарядки батареи осталось "+getTimeCharging();
    } else if ((task.search("покажи") !== -1 || task.search("скажи") !== -1) && task.search("сколько") !== -1 && task.search("до") !== -1 && task.search("полной") !== -1 && task.search("разрядки") !== -1 && task.search("батареи") !== -1){
        answer = "До полной разрядки батареи осталось "+getTimeDischarging();
    } else if ((task.search("покажи") !== -1 || task.search("скажи") !== -1) && (task.search("заряд") !== -1 || task.search("charge") !== -1) && task.search("батареи") !== -1 || task.search("battery") !== -1){
        answer = "Заряд батареи равен "+getBatteryCharge();
    } else if ((task.search("перезагрузи") !== -1 || task.search("обнови") !== -1) && (task.search("страницу") !== -1)){
        answer = "Секунду";
        setTimeout(() => {
            location.href = location.href;
        }, 2000)
    } else {
        answer = "Я вас не понял";
    }
//
    return answer;
}