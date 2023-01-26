import { DeepPick } from "https://esm.sh/ts-deep-pick@0.2.2";
import { decompress } from "https://deno.land/x/zip@v1.2.5/mod.ts";

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

/**
 * Pick given properties from an object. Properties can be nested.
 * @param obj - The object to pick properties from
 * @param props - The properties to pick
 * @returns An object containing the picked properties
 */
export function pick<
  T extends Record<string, unknown>,
  K extends Exclude<NestedPaths<T>, "">,
>(
  o: T,
  props: K[],
  // @ts-expect-error: works fine despite the complaint
): DeepPick<T, K> {
  const result = {};

  for (const prop of props) {
    const path = prop.split(".");
    let current = result;

    for (let i = 0; i < path.length; i++) {
      const key = path[i];

      if (i === path.length - 1) {
        // @ts-expect-error: don't care about this util enough to fix
        current[key] = o[key];
      } else {
        // @ts-expect-error: don't care about this util enough to fix
        current[key] = current[key] || {};
        // @ts-expect-error: don't care about this util enough to fix
        current = current[key];
      }
    }
  }

  return result as any;
}

/**
 * Download a source file and write it into the destination
 */
export async function download(
  source: string,
  destination: string,
): Promise<void> {
  // We use browser fetch API
  const response = await fetch(source);

  if (!response.ok) {
    throw new Error(`Failed to download ${source}`);
  }

  const blob = await response.blob();

  // We convert the blob into a typed array
  // so we can use it to write the data into the file
  const buf = await blob.arrayBuffer();
  const data = new Uint8Array(buf);

  // We then create a new file and write into it
  await Deno.writeFile(destination, data);
}

/**
 * Unzip a file at a given path
 */
export async function unzip(filePath: string): Promise<string> {
  const dest = filePath.replace(/\.zip$/, "");
  const response = await decompress(filePath, dest);

  if (!response) {
    throw new Error(`Failed to decompress ${filePath}`);
  }

  return dest;
}

type Concat<Fst, Scd> = Fst extends string
  ? Scd extends string ? Fst extends "" ? `${Scd}`
    : `${Fst}.${Scd}`
  : never
  : never;

export type NestedPaths<T, Cache extends string = ""> = T extends string ? Cache
  : {
    [P in keyof T]: Concat<Cache, P> | NestedPaths<T[P], Concat<Cache, P>>;
  }[keyof T];

/**
 * TypeFromPath
 * Get the type of the element specified by the path
 * @example
 * type TypeOfAB = TypeFromPath<{ a: { b: { c: string } }, 'a.b'>
 * // { c: string }
 */
export type TypeFromPath<
  T extends Record<string, unknown>,
  Path extends string, // Or, if you prefer, NestedPaths<T>
> = {
  [K in Path]: K extends keyof T ? T[K]
    : K extends `${infer P}.${infer S}`
      ? T[P] extends Record<string, unknown> ? TypeFromPath<T[P], S>
      : never
    : never;
}[Path];
