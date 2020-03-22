function search(task) {
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
    }  else if ((task.search("в") !== -1 && task.search("вики") !== -1) || task.search("википедии") !== -1) {
        task = task.replace("find", "");
        task = task.replace("найти", "");
        task = task.replace("найди", "");
        task = task.replace("ищи", "");
        task = task.replace("поищи", "");
        task = task.replace("займись", "");
        task = task.replace("поиском", "");
        task = task.replace("поиск", "");
        task = task.replace("в", "");
        task = task.replace("вики", "");
        task = task.replace("википедии", "");
        task = task.trim();
        while (task.search(" ") !== -1) {
            task = task.replace(task[task.search(" ")], "+");
        }
        window.open("https://ru.wikipedia.org/w/index.php?title=%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F%3A%D0%9F%D0%BE%D0%B8%D1%81%D0%BA&go=%D0%9F%D0%B5%D1%80%D0%B5%D0%B9%D1%82%D0%B8&ns0=1&search="+task);
        answer = "Уже ищю";
    } else {
        break;
    }
    return answer;
}