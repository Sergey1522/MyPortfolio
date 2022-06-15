console.log("Hello");

const burger = document.querySelector(".nav_burger");
const navmenu = document.querySelector(".nav_menu");

burger.addEventListener("click", (e) => {
  // console.log(burger);
  burger.classList.toggle("open_menu");
  navmenu.classList.toggle("open_menu");
  // document.body.classList.remove("open_menu");
});
// document.body.addEventListener("click", (e) => {
//   if (e.target) {
//     burger.classList.remove("open_menu");
//   }
// });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  let Y = window.scrollY;
  // console.log(Y);
  if (Y >= navbar.clientHeight) {
    // console.log(Y, navbar.clientHeight);
    navbar.classList.add("stick");
  } else if (Y < navbar.clientHeight) {
    navbar.classList.remove("stick");
  }
  const scrollTop = document.querySelector("#scroll");
  const _Y = window.pageYOffset;
  // console.log(window.scrollY);
  if (_Y > 1000) {
    // console.log(_Y);
    scrollTop.classList.add("show");
    scrollTop.classList.remove("hiden");
  } else if (_Y < 300) {
    scrollTop.classList.remove("show");
    scrollTop.classList.add("hiden");
  }
  scrollTop.onclick = () => {
    window.scrollTo(0, 0);
  };
});

const navItems = document.querySelectorAll(".nav_link").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    let href = elem.getAttribute("href").substring(1);
    // const dist = href.clientHeight;
    console.log(elem.getAttribute("href").substring(1));

    const scrollTarget = document.getElementById(href);
    // console.log(scrollTarget);

    const topOffset = document.querySelector(".navbar").clientHeight;
    // console.log(topOffset);
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    // console.log(elementPosition, topOffset);
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

const form = document.querySelector("#contact");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {},
    body: new FormData(form),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const arr = [];
      arr.push(data);
      console.log("arr =", arr);
    });
});
