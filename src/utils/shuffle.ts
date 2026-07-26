export function shuffle<T>(array: T[]): T[] {
  const result = array.slice();
  let currentIndex = result.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }

  return result;
}
