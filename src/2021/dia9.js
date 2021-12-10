export default function groupBy(collection, it) {
  const results = collection.map((x) => {
    if (typeof it == "string") {
      return x[it] ? x[it] : x.length;
    } else return it.call(this, x);
  });
  const group = {};
  results.forEach((r, i) => {
    if (!group[r]) group[r] = [];
    group[r].push(collection[i]);
  });
  return group;
}
