/**
 * Returns the closest string in an array to the given string.
 *
 * @param arr - An array of strings to search
 * @param str - The string to search for
 */
export function closest(arr: string[], str: string): string | undefined {
  let minDistance = Infinity;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const dist = distance(str, arr[i]);
    if (dist < minDistance) {
      minDistance = dist;
      minIndex = i;
    }
  }
  return arr[minIndex];
}

/**
 * Calculates the Levenshtein distance between two strings.
 *  @see https://en.wikipedia.org/wiki/Levenshtein_distance
 *
 * @param a - The first string to compare
 * @param b - The second string to compare
 */
export function distance(a: string, b: string): number {
  if (a.length == 0) {
    return b.length;
  }

  if (b.length == 0) {
    return a.length;
  }

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1),
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
