function rests (a, b, c) {
  console.log((a + b) % c);
  console.log((a % c + b % c) % c);
  console.log((a * b) % c);
  console.log((a % c * b % c) % c);
}
rests(5, 8, 4);