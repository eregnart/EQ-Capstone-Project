// A simple stubbed Storage Service (used for local persistence)
export const StorageService = {
  save: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`StorageService → saved ${key}`);
  },
  load: (key) => {
    const data = localStorage.getItem(key);
    console.log(`StorageService → loaded ${key}`);
    return data ? JSON.parse(data) : null;
  },
  remove: (key) => {
    localStorage.removeItem(key);
    console.log(`StorageService → removed ${key}`);
  },
};
