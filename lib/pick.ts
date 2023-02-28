/**
 * Pick given properties from an object. Properties can be nested.
 * @param obj - The object to pick properties from
 * @param props - The properties to pick
 * @returns An object containing the picked properties
 */
export function pick(
  o: Record<string, unknown>,
  props: string[],
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const prop of props) {
    const path = prop.split(".");
    let current = result;

    for (let i = 0; i < path.length; i++) {
      const key = path[i];

      if (i === path.length - 1) {
        current[key] = o[key];
      } else {
        current[key] = current[key] || {};
        // @ts-expect-error: don't care about this util enough to fix
        current = current[key];
      }
    }
  }

  return result;
}
