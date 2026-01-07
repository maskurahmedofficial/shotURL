function generateRandomText() {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  const length = 6;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

module.exports = generateRandomText