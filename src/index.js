/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds*1000)
    }); 
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
    return new Promise(function(resolve) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', ' https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 404) {
                console.log(404)
            } else {
               const cities = JSON.parse(xhr.responseText);
               console.log(cities);
               let towns = [];

               for (let city of cities) {
                    towns.push(city.name);
               }

               resolve(towns.sort());
               console.log(towns);
            }
        };
    });
}

export {
    delayPromise,
    loadAndSortTowns
};
