/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {number[]} массив уникальных значений, отсортированный по возрастанию
 */

export function sortArr(arr) {
  return arr.sort((x, y) => x - y);
}

export function getUnique(input) {
  return sortArr(input.filter((elem, index) => input.indexOf(elem) === index));
}
