const btns = document.querySelectorAll(".tab-btn"),
      test = document.querySelector(".test"),
      openDrop = document.querySelector(".language-drop"),
      scrollText = document.querySelectorAll(".scroll-text"),
      counter = document.querySelector("#counter"),
      progres = document.querySelectorAll(".progress "),
      progresBar = document.querySelector(".progress-bar"),
      slides = document.querySelectorAll(".slide"),
      dep = document.querySelector("#dep"),
      cred = document.querySelector("#cred"),
      cash = document.querySelector("#cash"),
      tabsBtns = document.querySelectorAll(".item"),
      stopInterval = document.querySelector("#stop"),
      tabFace = document.querySelector('.tab-face'),
      mobButton = document.querySelector('.mob-menu'),
      mobMenu = document.querySelector('.nav'),
      body = document.querySelector('html');

let start = 4584692;
let b = 0;
document.addEventListener("DOMContentLoaded", () => {
  const localNum = localStorage.getItem("num");
  if (localNum != null) {
    start = +localNum;
    counter.innerHTML = start
  }
});
document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == openDrop || openDrop.contains(target);
  const menu_is_active = openDrop.classList.contains("active");

  if (!its_menu && menu_is_active) {
    openDrop.classList.toggle("active");
  }
});
 //mobile menu


 mobButton.addEventListener('click',()=>{
  mobButton.classList.toggle('active')
  mobMenu.classList.toggle('active')
  body.classList.toggle('active')
 });
 mobMenu.addEventListener('click',(e)=>{
  const target = e.target;
  console.dir(target)
  if(window.innerWidth < 800 && target.className === 'nav-link' || window.innerWidth < 800 && target.className === 'nav active' ){
    mobButton.classList.remove('active')
    mobMenu.classList.remove('active')
    body.classList.remove('active')
  }
  
 })





btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
    const target = e.target;

    target.classList.add("active");
    console.log(target.dataset.plan);
    switch (target.dataset.plan) {
      case "standart": {
        dep.innerHTML = `200 <span class="small">usd</span> - 1
        <span class="small">К</span>`;
        cred.innerHTML = `1:200`;
        cash.innerHTML = `<span class="small">No cashback</span>`;
        break;
      }
      case "gold": {
        dep.innerHTML = `200 <span class="small">usd</span> - 1
        <span class="small">К</span>`;
        cred.innerHTML = `1:200`;
        cash.innerHTML = `<span class="small">No cashback</span>`;
        break;
      }
      case "platinum": {
        dep.innerHTML = `$5 <span class="small">K</span> - $25
        <span class="small">К</span>`;
        cred.innerHTML = `1:200`;
        cash.innerHTML = `<span class="small">1$ per 5 lots (1 month)</span>`;
        break;
      }
      case "vip": {
        dep.innerHTML = `$50 <span class="small">K</span>`;
        cred.innerHTML = `1:200`;
        cash.innerHTML = `<span class="small">$1.00 per lot (1 month)</span>`;
        break;
      }
    }
  });
});
openDrop.addEventListener("click", () => {

  openDrop.classList.toggle("active");
});


//scroll-string
window.addEventListener("scroll", () => {
  scrollText.forEach((el, index) => {
    const rect = el.getBoundingClientRect();

    const test = 800 - rect.top;
    if (rect.top < 800 && rect.top > -100) {
      el.style.transform = `translateX(-${test}px)`;
    }
  });
  progres.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < 600) {
      el.classList.add("active");
    }
  });
});

// counter

setInterval(() => {
  let newNumber = start + Math.floor(Math.random() * 5);
  start = newNumber;
  const num = newNumber.toLocaleString("en-US");;

  localStorage.setItem("num", start);

  counter.innerHTML = num;
}, 2000);
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// }


// const iner = tabsBtns[b].querySelector('.top')
// console.dir(iner);
function changeTab() {
  if (b < tabsBtns.length) {
    for (let i = 0; i < tabsBtns.length; i++) {
      const element = tabsBtns[i];
      element.classList.remove("active");
    }
    tabFace.classList.add('active');
    tabsBtns[b].classList.add("active");
    const iner = tabsBtns[b].querySelector('.top');
    
    setTimeout(()=>{tabFace.classList.remove('active')},1500)
    tabFace.innerHTML = `<span class="big">${iner.innerText}</span>`;
    b++;
  } else {
    b = 0;
  }
}

let interval = setInterval(changeTab, 2000);

// stopInterval.addEventListener("mouseenter", () => {
//    clearInterval(interval);
// });
// stopInterval.addEventListener("mouseleave", () => {
//    interval = setInterval(changeTab, 2000);
//  });



