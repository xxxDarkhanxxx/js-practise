/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}



function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
    console.log('Вы классический зритель');
  } else {
    console.log('Вы киноман');
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let a = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    personalMovieDB.genres[i] = a;
  }
}

function showMyDb() {
  if (personalMovieDB.privat === false) {
    console.log('not private', personalMovieDB);
  }
}


rememberMyFilms();
detectedPersonalLevel();
showMyDb();
writeYourGenres();

// console.log('personalMovieDB: ', personalMovieDB);

// Код возьмите из предыдущего домашнего задания