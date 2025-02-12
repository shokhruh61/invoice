 function generateID() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
  const randomDigit = () => Math.floor(Math.random() * 10);

  return randomLetter() + randomLetter() + randomDigit() + randomDigit() + randomDigit() + randomDigit();
}

export default generateID