export default function contains(store, product) {
  let found = false;
  for (const key in store) {
    const element = store[key];
    if (typeof element === "string") {
      if (element === product) return true;
    } else {
      found = found || contains(element, product);
    }
  }
  return found;
}
