/**
 * Помогите Васе понять, будет ли фраза палиндромом.
 *  Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.
 *
 * Например: A man, a plan, a canal: Panama -> true
 */

function prepareLine(arr) {
  const dict = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "j",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  return arr
    .filter((letter) => dict.includes(letter.toLowerCase()))
    .join("")
    .toLowerCase();
}

function isPalindrome(line) {
  const lineArr = line.split("");
  const lettersLine = prepareLine(lineArr);
  const reversedLettersLine = prepareLine([...lineArr].reverse());

  return lettersLine === reversedLettersLine;
}
