/**
 * Представьте себе онлайн-игру для поездки в метро: игрок нажимает на кнопку, и на экране появляются три случайных числа.
 * Если все три числа оказываются одной чётности, игрок выигрывает.
 * Напишите программу, которая по трём числам определяет, выиграл игрок или нет.
 */

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

function checkParity(...args) {
  let parity;
  let result;

  for (let i = 0; i < args.length; i++) {
    const el = args[i];

    if (i === 0) {
      if (isEven(el)) {
        parity = "even";
      } else {
        parity = "odd";
      }

      continue;
    }

    if ((parity === "even" && isOdd(el)) || (parity === "odd" && isEven(el))) {
      result = false;

      break;
    }

    result = true;
  }

  return result;
}
