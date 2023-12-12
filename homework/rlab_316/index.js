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
const topMenuEl = document.querySelector(`#top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

//Part 1-3

menuLinks.forEach((link) => {
  let addOn = document.createElement(`a`);
  addOn.setAttribute(`href`, link.href);
  addOn.textContent = link.text;
  topMenuEl.appendChild(addOn);
});

//Part 2-1
let subMenuEl = document.querySelector(`#sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add(`flex-around`);
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = `0`;

//2-4 and 2-5
const topMenuLinks = document.querySelectorAll(`#top-menu a`);
let subs = [];

topMenuEl.addEventListener(`click`, (event) => {
  subs = [];
  event.preventDefault();
  topMenuLinks.forEach((link) => {
    if (event.target.innerHTML === link.innerHTML) {
      if (
        document.querySelector(`.active`)?.innerHTML == event.target.innerHTML
      )
        link.classList.remove(`active`);
      else {
        document.querySelector(`.active`)?.classList.remove(`active`);
        link.classList.add("active");
      }

      if (link.href.includes(`#`)) {
        if (subMenuEl.style.top == `0px` || subMenuEl.style.top == `0%`) {
          subMenuEl.style.top = `100%`;
          menuLinks.forEach((element) => {
            if (element.hasOwnProperty(`subLinks`)) {
              if (element.text === link.innerHTML) {
                for (const key in element) {
                  if (key === `subLinks`) {
                    subs.push(element.subLinks);
                  }
                }
              }
            }
          });
          buildSubmenu(subs);
        } else {
          subMenuEl.style.top = `0%`;
        }
      } else {
        subMenuEl.style.top = `0%`;
      }
    }
  });
});

//2-5 helper function
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = ``;

  subLinks.forEach((arr) => {
    arr.forEach((link) => {
      let addOn = document.createElement(`a`);
      for (const key in link) {
        if ([key] == `text`) addOn.textContent = link.text;
        if ([key] == `href`) addOn.setAttribute(`href`, link.href);
        subMenuEl.appendChild(addOn);
      }
    });
  });
}
