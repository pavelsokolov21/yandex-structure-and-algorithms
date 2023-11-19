/**
 * Вася делает тест по математике: вычисляет значение функций в различных точках. Стоит отличная погода, и друзья зовут Васю гулять.
 * Но мальчик решил сначала закончить тест и только после этого идти к друзьям. К сожалению, Вася пока не умеет программировать.
 * Зато вы умеете. Помогите Васе написать код функции, вычисляющей y = ax2 + bx + c.
 * Напишите программу, которая будет по коэффициентам a, b, c и числу x выводить значение функции в точке x.
 *
 */

function evaluateFunction(x, a, b, c) {
  return a * Math.pow(x, 2) + b * x + c;
}
