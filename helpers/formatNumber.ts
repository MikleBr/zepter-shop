export function formatNumber(price: number) {
  const priceString = price.toString();
  const arr = priceString.split('').reverse();
  const arrWithSpaces = arr.map((s, i) => {
    if ((i + 1) % 3 === 0) {
      return ' ' + s;
    }
    return s;
  });

  return arrWithSpaces.reverse().join('').trim();
}
