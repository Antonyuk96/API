"use strict";
const images = [
    {
      id: 0,
      src: "https://fullhdoboi.ru/wp-content/uploads/_ph/3/902415819.jpg",
    },
    {
      id: 1,
      src: "https://kalix.club/uploads/posts/2022-12/1671572056_kalix-club-p-nemetskaya-ovcharka-oboi-na-telefon-krasiv-1.jpg",
    },
    {
      id: 2,
      src: "https://kalix.club/uploads/posts/2022-12/1671572083_kalix-club-p-nemetskaya-ovcharka-oboi-na-telefon-krasiv-2.jpg",
    },
    {
      id: 3,
      src: "https://kartinki.pics/uploads/posts/2021-07/1625781745_29-kartinkin-com-p-ovcharka-oboi-krasivie-29.jpg",
    },
    {
      id: 4,
      src: "https://dynalib.ru/wp-content/uploads/nemeczkaya-ovcharka-2.jpg",
    },
  ];
  
  const containerEl = document.querySelector(".container");
  const prevBtnEl = document.querySelector(".buttons_prev");
  const nextBtnEl = document.querySelector(".buttons_next");
  
  const navEl = document.querySelector('.nav');
  
  let indexImg = 0; // Bндекс по умолчанию
  let currentImage = document.querySelector('.current_img');
  
  //Предыдущие картинки
  prevBtnEl.addEventListener('click', function () {
      if(indexImg === 0) {
          indexImg = images.length - 1;
      } else {
          indexImg--;
      }
      showImage(indexImg);
  });
  
  //Следующие картинки
  nextBtnEl.addEventListener('click', function () {
      if(indexImg === images.length - 1) {
          indexImg = 0;
      } else {
          indexImg++;
      }
      showImage(indexImg);
  });
  
  //Навигационные точки
  for (let i = 0; i < images.length; i++) {
      const navItem = document.createElement('div');
      navItem.classList.add('nav_item')
      navItem.textContent = i + 1;
      navEl.append(navItem);
  }
  
  navEl.addEventListener('click', function (e) {
      indexImg = +e.target.textContent - 1;
      showImage(indexImg);
  });
  
  function showImage(index) {
      currentImage.src = images[index].src;
  }