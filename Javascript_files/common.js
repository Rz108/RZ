/*
Author: Goh Rui Zhuo
Date:   07/15/2022

Filename:common.js

*/
/*set the open close for navbar*/
document.querySelector('.first-button').addEventListener('click', function () {

    document.querySelector('.icon1').classList.toggle('open');
});
/*set the fade in function*/
AOS.init({
    duration: 1000,
    once: true,
});
/*set the animation for footer*/
jQuery('#waterdrop').raindrops({ color: 'rgb(22, 43, 75)', density: 0.2, frequency: 15 });









