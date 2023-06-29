export const capitalize = (str: string): string =>
  str
    .split('')
    .map((str, index) => (index === 0 ? str.toUpperCase() : str))
    .join('');
