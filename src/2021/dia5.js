export default function daysToXmas(date) {
  const xmast = new Date("Dec 25, 2021");
  return Math.ceil((xmast - date) / 1000 / 60 / 60 / 24);
}
