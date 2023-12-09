

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Part 1 -1
const mainEl = document.querySelector(`main`);
mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = `<h1>DOM Manipulation<h1>`;
mainEl.classList.add(`flex-ctr`);
// Part 1-2
const topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

//2-4
topMenuEl.addEventListener(`click`, (event) => {
  event.preventDefault();
  console.log(event.target.innerHTML);
  if (event.target!==`a`) {
    return;
  }
});

//Part 1-3

menuLinks.forEach((link) => {
  let addOn = document.createElement(`a`);
  addOn.setAttribute(`href`, link.href);
  addOn.textContent = link.text;
  topMenuEl.appendChild(addOn);
});

//Part 2-1
const subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.style.flex = `flex`;
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = `0`;

//2-4
let topMenuLinks = [];

menuLinks.forEach((element) => {
  for (const key in element) {
    if (key === `href`) topMenuLinks.push(element[key]);
  }
});
