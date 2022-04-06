/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */

export function sortArr(arr) {
  return arr.sort((x, y) => x - y);
}

export function getIntersection(first, second) {
  const firstArr = sortArr(first.filter(x => second.includes(x)));
  const secondArr = sortArr(second.filter(x => first.includes(x)));

  if (firstArr.length > secondArr.length) { return secondArr; }
  return firstArr;
}
