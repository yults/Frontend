/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  let numbers = number.toString();

  while (numbers.length > 1) {
    numbers.split('');
    let ans = 0;

    for (const num of numbers) {
      ans += Number(num);
    }
    numbers = ans.toString();
  }
  return Number(numbers);
}
