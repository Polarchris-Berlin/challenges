console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword == SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 5;

if (number % 2 === 1) {
  console.log("The number is uneven.");
} else {
  console.log("The number is even.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000005;

if (numberOfHotdogs < 5) {
  let priceSingle = 2;
  let priceTotal = priceSingle * numberOfHotdogs;

  console.log(
    "Preis p. Hotdog: " +
      priceSingle +
      " €" +
      "Gesamtpreis: " +
      priceTotal +
      " €"
  );
} else if (numberOfHotdogs < 100) {
  let priceSingle = 1.5;
  let priceTotal = priceSingle * numberOfHotdogs;

  console.log(
    "Preis p. Hotdog: " +
      priceSingle +
      " €" +
      "  Gesamtpreis: " +
      priceTotal +
      " €"
  );
} else if (numberOfHotdogs < 1000000) {
  let priceSingle = 1;
  let priceTotal = priceSingle * numberOfHotdogs;

  console.log(
    "Preis p. Hotdog: " +
      priceSingle +
      " €" +
      "  Gesamtpreis: " +
      priceTotal +
      " €"
  );
} else numberOfHotdogs >= 1000000;
{
  let priceSingle = 0.1;
  let priceTotal = priceSingle * numberOfHotdogs;

  console.log(
    "Preis p. Hotdog: " +
      priceSingle +
      " €" +
      "  Gesamtpreis: " +
      priceTotal +
      " €"
  );
}
// Part 4: Daytime
const currentHour = 17;
const statement = "";

if (currentHour < 17)
  console.log("Still need to learn"), console.log(statement);
else {
  console.log("Partytime!!!");
}

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
