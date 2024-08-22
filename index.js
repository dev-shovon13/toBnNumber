const bengaliDigits = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

const toBnNumber = (englishNumber) => {
  return englishNumber
    .toString()
    .split("")
    .map((digit) => bengaliDigits[digit] || digit)
    .join("");
};

module.exports = toBnNumber;
