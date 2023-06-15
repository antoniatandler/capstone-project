export function loadFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}

export function writeToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
