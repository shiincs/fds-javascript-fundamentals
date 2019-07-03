const a = 20;
const b = 10;
const c = 10;
if (a >= b && b >= c || c >= b && b >= a) {
  console.log(b);
} else if (a >= c && c >= b || b >= c && c >= a) {
  console.log(c);
} else if (b >= a && a >= c || c >= a && a >= b) {
  console.log(a);
};