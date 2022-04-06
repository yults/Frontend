/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */

export function sortStr(str) {
  return str.replace(/\s/g, '').toLowerCase().split('').sort()
    .join('');
}

export function anagram(first, second) {
  return sortStr(first) === sortStr(second);
}
