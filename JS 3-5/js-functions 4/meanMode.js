/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  const arr = {};

  let maxVal = 0;

  let averege = numbers.reduce((sum, i) => {
    arr[i] = (arr[i] || 0) + 1;
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
    return sum + i;
  }, 0);

  let maxKey = 0;

  let maxCnt = 0;

  averege /= numbers.length;
  for (const i in arr) {
    if (arr[i] === maxVal) {
      maxKey = i;
      maxCnt += 1;
    }
  }

  if (maxCnt === 1 && Number(maxKey) === averege) {
    return true;
  }
  return false;
}
