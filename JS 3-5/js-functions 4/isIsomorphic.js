// TODO  прописать биекцию для изоморфизма
/**
 * Напишите функцию isIsomorphic(left, right), определяющую,
 * являются ли строки left и right изоморфными.
 *
 * Две строки называются изоморфными, если в строке A можно заменить
 * символы таким образом, чтобы получилась строка B.
 *
 * Каждый конкретный символ может заменяться только на один конкретный
 * символ, в том числе на самого себя. При этом все вхождения символа N
 * могут быть заменены только на символ M.
 *
 * Порядок символов должен остаться неизменным.
 *
 * Пример:
 * isIsomorphic('egg', 'foo') === true
 * isIsomorphic('foo', 'bar') === false
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
export function notBiekt(biektion, key, val) {
  if (biektion.has(key)) {
    if (biektion.get(key) !== val) {
      return true;
    }
  }
  return false;
}

export function isIsomorphic(left, right) {
  if (left.length !== right.length) { return false; }
  const biektionLeft = new Map();
  const biektionRight = new Map();

  for (let i = 0; i < left.length; i++) {
    if (notBiekt(biektionLeft, left[i], right[i])
       || notBiekt(biektionRight, right[i], left[i])) { return false; }
    biektionLeft.set(left[i], right[i]);
    biektionRight.set(right[i], left[i]);
  }
  return true;
}
