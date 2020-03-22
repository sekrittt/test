function open(task) {
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
    }  else if (task.search("вики") !== -1 || task.search("википедию") !== -1) {
        answer = "Уже открываю";
        window.open("https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0");
    } else {
        break;
    }
    return answer;
}