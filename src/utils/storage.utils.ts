const STORAGE: 'localStorage' | 'sessionStorage' = 'localStorage';
const PREFIX = 'carage';

export function generateGuid(): string {
  return Math
    .floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function prefixKey(key: string): string {
  return `${ PREFIX }.${ key }`;
}

export function save(key: string, data: string) {
  window[STORAGE].setItem(key, data);
}

export function load(key: string): string {
  const data = window[STORAGE].getItem(key);
  if (data !== null) {
    return data;
  }
  return undefined;
}

export function all(): [string, string][] {
  return Object.entries(window[STORAGE]);
}
