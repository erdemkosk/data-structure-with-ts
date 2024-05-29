/* eslint-disable import/prefer-default-export */
export function safeStringify(obj, space = 2): string {
  const cache = new Set();
  const result = JSON.stringify(
    obj,
    (_, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return '[Circular]';
        }
        cache.add(value);
      }
      return value;
    },
    space,
  );
  cache.clear();
  return result;
}
