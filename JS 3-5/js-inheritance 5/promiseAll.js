/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
export const promiseAll = promises => new Promise((resolve, reject) => {
  const ans = [];

  let cnt = promises.length;

  promises.forEach((promis, i) => {
    if (Promise.resolve(promis) === promis) {
      promis.then(res => {
        ans[i] = res;
        cnt -= 1;
        if (cnt === 0) {
          resolve(ans);
        }
      }, reject);
    } else { resolve(promises); }
  });
});
