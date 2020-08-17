/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const functions = {
  start: function () {
    count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (count == '' || count == null || isNaN(count)) {
      count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i <= 2; i++) {
      let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
      if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
      i++;
    }
  },
  detectedPersonalLevel: function () {
    if (count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (count < 30 && count > 10) {
      console.log('Вы классический зритель');
    } else {
      console.log('Вы киноман');
    }
  },
  writeYourGenres: function () {
    let genre;
    for (let i = 0; i < 3; i++) {
      genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      while (genre == '' || genre == null) {
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      }
      personalMovieDB.genres[i] = genre;
    }
    personalMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },
  showMyDB: function () {
    if (privat === false) {
      console.log('not private', personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (privat === false) {
      privat = true;
    } else if (privat === true) {
      privat = false;
    }
  },
};

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

let { count, privat } = personalMovieDB;

Object.setPrototypeOf(personalMovieDB, functions);

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
