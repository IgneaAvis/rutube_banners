/* eslint-disable no-unused-vars */
// direct
// document.getElementById("click_area").href =
//   yandexHTML5BannerApi.getClickURLNum(1)

// admitad
// document.addEventListener("DOMContentLoaded", function () {
//   updateAttrs()
// })

/* cycle */

const animOnBox = document.querySelector(".creative")
const lastAnimEle = document.querySelector(".indicator")
let countAnim = 0

function animEnd() {
  countAnim += 1
  const timer = 100

  if (countAnim === 1) {
    setTimeout(() => {
      animOnBox.classList.remove("anim-on")
    }, timer)
    setTimeout(() => {
      animOnBox.classList.add("anim-on")
    }, timer + 100)
    countAnim = 0
  }
}

lastAnimEle.addEventListener("animationend", () => {
  animEnd()
})

/* sprite */

// const creativeBox = document.querySelector(".creative");
// const imgsBox = document.querySelector(".images");

// const imgsUrls = [
//   // links to sprite
// ];

// const promisesArr = [];

// imgsUrls.forEach((url) => {
//   const fetchImg = new Promise((resolve, reject) => {
//     const img = document.createElement("img");

//     img.src = url;
//     img.onload = () => {
//       resolve("download resource");
//     };
//     img.onerror = () => {
//       reject();
//     };
//   });

//   promisesArr.push(fetchImg);
// });

// Promise.all(promisesArr)
//   .then(() => {
//     imgsBox.classList.add("onload-img");
//     creativeBox.classList.remove("placeholder");
//     creativeBox.classList.add("anim-on");
//   })
//   .catch(() => "error download resource");

// New Galo

// import "./index.less"
// import Arc from "./js/Arc"

// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")

// const arc = new Arc()

// let startTime

// arc.init({ n: 200, size: 1032, top: -323, left: 191 }) // n - количество полос, size - диаметр круга (по фигме)

// start()

// function update() {
//   requestAnimationFrame(update)
//   const time = Date.now() - startTime
//   const rotateSpeed = 0.01 // обороты в секунду;
//   const darknessPosSpeed = 0.3

//   const angle = (Math.PI * 2 * time * rotateSpeed) / 1000
//   const darknessPos = ((time * darknessPosSpeed) / 1000) % 1

//   arc.render(ctx, angle, darknessPos)
// }

// function start() {
//   startTime = Date.now()
//   update()
// }
