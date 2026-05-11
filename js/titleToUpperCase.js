const titleToUpperCase = (str) => {
  const arr = str.split(" ").map((word) => {
    const capitalLetter = word[0].toUpperCase();
    const wordWithoutFirstLetter = word.slice(1, word.length);
    return `${capitalLetter}${wordWithoutFirstLetter}`;
  });
  return arr.join(" ");
};

export default titleToUpperCase;
