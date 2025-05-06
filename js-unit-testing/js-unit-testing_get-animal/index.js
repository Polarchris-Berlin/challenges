export function getAnimal(animal) {
  return !animal
    ? "I do not like animals at all!"
    : animal === "cats"
    ? "I totally love cats!"
    : `I like ${animal}!`;
}
