console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (const language in languages) {
  console.log(languages[language]);

  const option = document.createElement("option");
  option.value = languages[language];
  option.textContent = languages[language];
  select.append(option);
  console.log(option);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for (const item in nav) {
  console.log(nav[item]);

  const navObject = nav[item];
  const menuItems = [];

  for (const subItem in navObject) {
    console.log(navObject[subItem]);
    const list = navObject[subItem];
    menuItems.push(list);
  }

  console.log("text:" + menuItems);
  const navItem = document.createElement("li");

  console.log(navItem);

  const navLink = document.createElement("a");
  navLink.href = menuItems[0];
  navLink.textContent = menuItems[1];
  navItem.append(navLink);
  console.log(navItem);
  ul.append(navItem);
}
// --^-- write or modify code above this line --^--
